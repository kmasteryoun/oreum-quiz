// [오름] 복습 퀴즈 배틀 — 호스트(선생님) 앱. 프로젝터 투사 전제.
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  function show(id) {
    document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('on'); });
    $(id).classList.add('on');
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var MARKS = ['①', '②', '③', '④', '⑤'];

  if (!window.CONFIG.firebase || !window.CONFIG.firebase.apiKey) {
    $('host-notice').style.display = 'block';
    $('host-notice').textContent = '⚠ config.js에 Firebase 설정이 없습니다. 설정 후 사용하세요.';
  } else {
    firebase.initializeApp(window.CONFIG.firebase);
  }

  var db = null, offset = 0;
  function getDb() {
    if (!db) {
      db = firebase.database();
      db.ref('.info/serverTimeOffset').on('value', function (s) { offset = s.val() || 0; });
    }
    return db;
  }
  function serverNow() { return Date.now() + offset; }

  var pin = null, quiz = null, qIndex = -1;
  var players = {};          // 실시간 players 스냅샷
  var answersRef = null, answersCache = {};
  var timerIv = null, questionEnded = false;
  var finalRanks = null, revealedCount = 0;
  var shuffle = null;        // {order: [원본 문항 인덱스...], choices: [문항별 선지 순열]}

  // 이번 게임에서 진행할 문항 수 (셔플 order 길이 기준 — ?limit=N으로 제한 가능)
  function qTotal() { return shuffle ? shuffle.order.length : quiz.questions.length; }

  // 표시 인덱스 → 원본 문항 + 선지 매핑
  function dispQ(i) {
    var oi = shuffle ? shuffle.order[i] : i;
    var q = quiz.questions[oi];
    var map = shuffle ? shuffle.choices[oi] : q.choices.map(function (_, x) { return x; });
    return { oi: oi, q: q, map: map };
  }

  // ── 퀴즈 선택 화면 ──
  ['hunmin', 'yongbi', 'sohak'].forEach(function (id) {
    var qz = window.QUIZZES[id];
    var card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = '<h3>' + qz.title + '</h3><p>' + qz.questions.length + '문항</p>';
    card.addEventListener('click', function () { createRoom(id); });
    $('quiz-cards').appendChild(card);
  });

  // 진행 중이던 게임 이어하기
  var savedRoom = null;
  try { savedRoom = JSON.parse(localStorage.getItem('oq_host_room') || 'null'); } catch (e) {}
  if (savedRoom && savedRoom.pin && window.CONFIG.firebase.apiKey) {
    getDb().ref('rooms/' + savedRoom.pin + '/meta').once('value').then(function (s) {
      var m = s.val();
      if (m && m.state !== 'ended') {
        $('resume-box').style.display = 'block';
        $('btn-resume').addEventListener('click', function () {
          pin = savedRoom.pin;
          quiz = window.QUIZZES[m.quizId];
          qIndex = m.qIndex;
          getDb().ref('rooms/' + pin + '/shuffle').once('value').then(function (ss) {
            shuffle = ss.val();
            attachRoom();
            if (m.state === 'lobby') enterLobby();
            else if (m.state === 'question') { renderQuestion(); watchAnswers(); }
            else if (m.state === 'reveal') restoreReveal();
            else if (m.state === 'podium') enterPodium(true);
          });
        });
      }
    });
  }

  function createRoom(quizId) {
    if (!window.CONFIG.firebase.apiKey) return;
    quiz = window.QUIZZES[quizId];
    pin = window.GameCore.genPin();
    qIndex = -1;
    shuffle = window.GameCore.makeShuffle(quiz);   // 게임마다 문항·선지 순서 새로 섞음
    var limit = parseInt(new URLSearchParams(location.search).get('limit'), 10);
    if (limit > 0) shuffle.order = shuffle.order.slice(0, limit);   // 테스트/짧은 게임용
    getDb().ref('rooms/' + pin).set({
      meta: { quizId: quizId, state: 'lobby', qIndex: -1, createdAt: firebase.database.ServerValue.TIMESTAMP },
      shuffle: shuffle
    }).then(function () {
      localStorage.setItem('oq_host_room', JSON.stringify({ pin: pin, quizId: quizId }));
      attachRoom();
      enterLobby();
    });
  }

  function attachRoom() {
    getDb().ref('rooms/' + pin + '/players').on('value', function (snap) {
      players = snap.val() || {};
      if ($('scr-lobby').classList.contains('on')) renderLobbyPlayers();
      updateAnswerCount();
    });
  }

  // ── 대기실 ──
  function enterLobby() {
    show('scr-lobby');
    var joinPath = location.pathname.replace(/host\.html$/, '');
    $('lobby-url').textContent = location.host + joinPath;
    $('lobby-pin').textContent = pin;
    $('lobby-quiz').textContent = quiz.title + ' · ' + quiz.questions.length + '문항';
    // QR: 찍으면 PIN이 미리 입력된 입장 페이지로
    var qrEl = $('lobby-qr');
    qrEl.innerHTML = '';
    if (window.QRCode) {
      new QRCode(qrEl, {
        text: location.origin + joinPath + '?pin=' + pin,
        width: 180, height: 180, correctLevel: QRCode.CorrectLevel.M
      });
    }
    renderLobbyPlayers();
    $('btn-start').onclick = function () { advance(0); };
  }

  function renderLobbyPlayers() {
    var nicks = [];
    for (var k in players) if (players[k].connected !== false) nicks.push(players[k].nick);
    $('lobby-count').textContent = nicks.length;
    $('lobby-nicks').innerHTML = nicks.map(function (n) { return '<div class="nick-chip">' + esc(n) + '</div>'; }).join('');
    $('btn-start').disabled = nicks.length === 0;
  }

  // ── 문제 진행 ──
  function advance(idx) {
    qIndex = idx;
    questionEnded = false;
    answersCache = {};
    var q = dispQ(qIndex).q;
    var limitMs = (q.timeLimit || quiz.timeLimit) * 1000;
    var startAt = serverNow();
    getDb().ref('rooms/' + pin + '/meta').update({
      state: 'question', qIndex: qIndex, qStartAt: startAt, qDeadline: startAt + limitMs
    });
    renderQuestion();
    watchAnswers();
  }

  function renderQuestion() {
    var d = dispQ(qIndex), q = d.q;
    show('scr-question');
    $('q-num').textContent = 'Q' + (qIndex + 1) + ' / ' + qTotal();
    if (q.image) { $('q-image').style.display = 'block'; $('q-image').querySelector('img').src = q.image; }
    else $('q-image').style.display = 'none';
    $('q-prompt').textContent = q.prompt;
    $('q-choices').className = 'choices' + (q.choices.join('').length < 40 ? ' grid2' : '');
    $('q-choices').innerHTML = d.map.map(function (orig, i) {
      return '<button class="choice" disabled><span class="mark">' + MARKS[i] + '</span>' + esc(q.choices[orig]) + '</button>';
    }).join('');
    startTimer(q);
    updateAnswerCount();
  }

  function startTimer(q) {
    clearInterval(timerIv);
    var limitMs = (q.timeLimit || quiz.timeLimit) * 1000;
    getDb().ref('rooms/' + pin + '/meta/qDeadline').once('value').then(function (s) {
      var deadline = s.val();
      function tick() {
        var remain = Math.max(0, deadline - serverNow());
        var sec = Math.ceil(remain / 1000);
        $('q-timer').textContent = sec;
        $('q-timer').classList.toggle('hurry', sec <= 5);
        $('q-timebar').classList.toggle('hurry', sec <= 5);
        $('q-timebar').firstElementChild.style.width = (remain / limitMs * 100) + '%';
        if (remain <= 0) { clearInterval(timerIv); endQuestion(); }
      }
      tick();
      timerIv = setInterval(tick, 200);
    });
  }

  function watchAnswers() {
    if (answersRef) answersRef.off();
    answersRef = getDb().ref('rooms/' + pin + '/answers/' + qIndex);
    answersRef.on('value', function (snap) {
      answersCache = snap.val() || {};
      updateAnswerCount();
      // 전원 응답 시 조기 종료
      var connected = 0;
      for (var k in players) if (players[k].connected !== false) connected++;
      var n = Object.keys(answersCache).length;
      if (connected > 0 && n >= connected && $('scr-question').classList.contains('on')) {
        endQuestion();
      }
    });
  }

  function updateAnswerCount() {
    if (!$('scr-question').classList.contains('on')) return;
    var connected = 0;
    for (var k in players) if (players[k].connected !== false) connected++;
    $('q-answered').textContent = Object.keys(answersCache).length;
    $('q-total').textContent = connected;
  }

  // ── 채점 + 결과 화면 ──
  function endQuestion() {
    if (questionEnded) return;
    questionEnded = true;
    clearInterval(timerIv);
    if (answersRef) answersRef.off();

    var q = dispQ(qIndex).q;
    var limitMs = (q.timeLimit || quiz.timeLimit) * 1000;
    var gains = {}, updates = {};
    for (var pid2 in answersCache) {
      var a = answersCache[pid2];
      var correct = a.choice === q.answer;
      var pts = window.GameCore.calcScore(correct, a.remainMs, a.limitMs || limitMs);
      gains[pid2] = pts;
      if (players[pid2]) {
        updates['players/' + pid2 + '/score'] = (players[pid2].score || 0) + pts;
        players[pid2].score = (players[pid2].score || 0) + pts;
      }
    }
    var counts = window.GameCore.tally(answersCache, q.choices.length);
    var top5 = window.GameCore.rank(players).slice(0, 5).map(function (r) { return { nick: r.nick, score: r.score }; });
    var nAns = Object.keys(answersCache).length;
    var rate = nAns ? Math.round(counts[q.answer] / nAns * 100) : 0;

    updates['reveal/' + qIndex] = { counts: counts, correct: q.answer, gains: gains, top5: top5, rate: rate };
    updates['meta/state'] = 'reveal';
    getDb().ref('rooms/' + pin).update(updates).then(function () { renderReveal(counts, rate, top5); });
  }

  function renderReveal(counts, rate, top5) {
    var d = dispQ(qIndex), q = d.q;
    show('scr-reveal');
    $('rv-num').textContent = 'Q' + (qIndex + 1) + ' 결과';
    if (q.image) { $('rv-image').style.display = 'block'; $('rv-image').querySelector('img').src = q.image; }
    else $('rv-image').style.display = 'none';
    $('rv-prompt').textContent = q.prompt;
    $('rv-rate').textContent = rate + '%';
    var total = counts.reduce(function (a, b) { return a + b; }, 0) || 1;
    // counts는 원본 선지 기준 → 화면 표시 순서(d.map)로 재배열
    $('rv-dist').innerHTML = d.map.map(function (orig, i) {
      return '<div class="dist-row' + (orig === q.answer ? ' is-answer' : '') + '">'
        + '<span class="lab">' + MARKS[i] + '</span>'
        + '<span class="bar-wrap"><span class="bar" style="width:' + (counts[orig] / total * 100) + '%; display:block"></span></span>'
        + '<span class="cnt">' + counts[orig] + '</span></div>';
    }).join('');
    $('rv-top5').innerHTML = top5.map(function (r, i) {
      return '<div class="row"><span><span class="r">' + (i + 1) + '위</span>' + esc(r.nick) + '</span><span>' + r.score + '점</span></div>';
    }).join('');
    $('btn-next').textContent = qIndex + 1 < qTotal() ? '다음 문제 ▶' : '🏆 순위 발표';
    $('btn-next').onclick = function () {
      if (qIndex + 1 < qTotal()) advance(qIndex + 1);
      else enterPodium(false);
    };
  }

  function restoreReveal() {
    getDb().ref('rooms/' + pin + '/reveal/' + qIndex).once('value').then(function (s) {
      var rv = s.val();
      if (rv) renderReveal(rv.counts, rv.rate, rv.top5);
    });
  }

  // ── 순위 발표 ──
  function enterPodium(isResume) {
    show('scr-podium');
    if (isResume) {
      getDb().ref('rooms/' + pin + '/final').once('value').then(function (s) {
        var f = s.val() || {};
        finalRanks = f.ranks || [];
        revealedCount = f.revealedCount || 0;
        renderPodium(f.namesShown || {});
      });
      return;
    }
    finalRanks = window.GameCore.rank(players);
    revealedCount = 0;
    getDb().ref('rooms/' + pin).update({
      'final/ranks': finalRanks, 'final/revealedCount': 0,
      'meta/state': 'podium'
    });
    renderPodium({});
  }

  function renderPodium(namesShown) {
    var listEl = $('pd-list');
    listEl.innerHTML = '';
    var showN = Math.min(revealedCount, 5, finalRanks.length);
    // 5위부터 revealedCount명 공개: 표시 순서는 위에서부터 1위→5위지만, 공개는 하위부터
    var visibleRanks = [];
    for (var i = 0; i < showN; i++) visibleRanks.push(Math.min(5, finalRanks.length) - 1 - i); // 4,3,2,1,0
    visibleRanks.sort(function (a, b) { return a - b; });
    visibleRanks.forEach(function (ri) {
      var r = finalRanks[ri];
      var row = document.createElement('div');
      row.className = 'podium-row r' + (ri + 1);
      var nameShown = namesShown && namesShown[ri];
      row.innerHTML = '<span class="rank">' + (ri + 1) + '위</span>'
        + '<span class="nick">' + esc(r.nick) + (nameShown ? ' <span class="real">(' + esc(r.name) + ')</span>' : '') + '</span>'
        + '<span class="score">' + r.score + '점</span>';
      row.addEventListener('click', function () {
        getDb().ref('rooms/' + pin + '/final/namesShown/' + ri).set(true);
        var real = row.querySelector('.real');
        if (!real) {
          row.querySelector('.nick').innerHTML = esc(r.nick) + ' <span class="real">(' + esc(r.name) + ')</span>';
        }
      });
      listEl.appendChild(row);
    });
    var done = showN >= Math.min(5, finalRanks.length);
    $('btn-reveal-next').style.display = done ? 'none' : 'block';
    $('btn-finish').style.display = done ? 'block' : 'none';
  }

  $('btn-reveal-next').addEventListener('click', function () {
    revealedCount++;
    getDb().ref('rooms/' + pin + '/final/revealedCount').set(revealedCount);
    getDb().ref('rooms/' + pin + '/final/namesShown').once('value').then(function (s) {
      renderPodium(s.val() || {});
    });
  });

  // ── 종료 + 결과 전송 ──
  $('btn-finish').addEventListener('click', function () {
    $('btn-finish').disabled = true;
    getDb().ref('rooms/' + pin).once('value').then(function (snap) {
      var room = snap.val();
      getDb().ref('rooms/' + pin + '/meta/state').set('ended');
      show('scr-ended');
      sendResults(room);
    });
  });

  function sendResults(room) {
    if (!window.CONFIG.sheetWebhook) {
      $('end-msg').textContent = '결과 저장용 시트가 아직 연결되지 않았습니다. (config.js의 sheetWebhook)';
      return;
    }
    var ranks = window.GameCore.rank(room.players || {});
    var qids = quiz.questions.map(function (q) { return q.id; });
    // 시트 열은 원본 문항 순서(id 순). answers/reveal은 표시 순서 키 → order로 역매핑
    var order = (room.shuffle && room.shuffle.order) || quiz.questions.map(function (_, i) { return i; });
    var rows = ranks.map(function (r, i) {
      var p = room.players[r.pid];
      var row = [i + 1, p.name, p.school, p.nick, r.score];
      quiz.questions.forEach(function (q, qi) {
        var di = order.indexOf(qi);
        var a = room.answers && room.answers[di] && room.answers[di][r.pid];
        var g = room.reveal && room.reveal[di] && room.reveal[di].gains ? (room.reveal[di].gains[r.pid] || 0) : 0;
        if (!a) row.push('-');
        else if (a.choice === q.answer) row.push('O(' + g + ')');
        else row.push('X(' + (a.choice + 1) + ')');
      });
      return row;
    });
    var payload = {
      quizTitle: quiz.title,
      date: new Date().toISOString().slice(0, 10),
      pin: pin,
      questionIds: qids,
      rows: rows
    };
    fetch(window.CONFIG.sheetWebhook, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    }).then(function () {
      $('end-msg').textContent = '✅ 결과가 구글 시트에 저장되었습니다. (' + rows.length + '명)';
      localStorage.removeItem('oq_host_room');
    }).catch(function (e) {
      $('end-msg').textContent = '⚠ 결과 전송 실패: ' + e.message + ' — 시트를 확인해 주세요.';
    });
  }

  $('btn-new').addEventListener('click', function () {
    localStorage.removeItem('oq_host_room');
    location.reload();
  });
})();
