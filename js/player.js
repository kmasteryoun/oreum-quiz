// [오름] 복습 퀴즈 배틀 — 학생 앱
(function () {
  'use strict';

  var SCHOOLS = ['군포고', '군포중앙고', '산본고', '수리고', '용호고', '흥진고', '계원예고', '과천외고', '과천중앙고', '관양고', '동산고', '동안고', '동탄국제고', '백영고', '부흥고', '성사고', '수원외고', '안산고', '안양여고', '양명고', '우성고', '인덕원고', '청심국제고', '평촌고', 'N수', '기타'];

  var $ = function (id) { return document.getElementById(id); };
  function show(id) {
    document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('on'); });
    $(id).classList.add('on');
  }

  // 학교 드롭다운
  SCHOOLS.forEach(function (s) {
    var o = document.createElement('option');
    o.value = s; o.textContent = s;
    $('in-school').appendChild(o);
  });

  // Firebase 초기화
  if (!window.CONFIG.firebase || !window.CONFIG.firebase.apiKey) {
    $('join-notice').style.display = 'block';
    $('join-notice').textContent = '아직 서버 설정이 완료되지 않았습니다. (선생님: config.js에 Firebase 값을 넣어주세요)';
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

  // 상태
  var pin = null, quiz = null, meta = null;
  var pid = localStorage.getItem('oq_pid');
  if (!pid) { pid = 'p' + Math.random().toString(36).slice(2, 10); localStorage.setItem('oq_pid', pid); }
  var myNick = '', myAnswered = {}, timerIv = null;

  // 재입장 지원: 마지막 방 정보
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem('oq_last') || 'null'); } catch (e) {}
  if (saved && saved.pin) {
    $('in-pin').value = saved.pin;
    $('in-name').value = saved.name || '';
    $('in-school').value = saved.school || SCHOOLS[0];
    $('in-nick').value = saved.nick || '';
  }

  $('btn-join').addEventListener('click', function () {
    var p = $('in-pin').value.trim();
    var name = $('in-name').value.trim();
    var school = $('in-school').value;
    var nick = $('in-nick').value.trim();
    var errEl = $('join-err');
    errEl.textContent = '';
    if (!/^[0-9]{6}$/.test(p)) { errEl.textContent = 'PIN 6자리를 입력하세요.'; return; }
    if (!name) { errEl.textContent = '이름(실명)을 입력하세요.'; return; }
    if (!nick) { errEl.textContent = '닉네임을 입력하세요.'; return; }
    if (!window.CONFIG.firebase.apiKey) { errEl.textContent = '서버 설정이 아직 안 되어 있어요.'; return; }

    $('btn-join').disabled = true;
    getDb().ref('rooms/' + p + '/meta').once('value').then(function (snap) {
      var m = snap.val();
      if (!m) { errEl.textContent = '해당 PIN의 게임을 찾을 수 없어요.'; $('btn-join').disabled = false; return; }
      if (m.state === 'ended') { errEl.textContent = '이미 끝난 게임이에요.'; $('btn-join').disabled = false; return; }
      pin = p; myNick = nick;
      quiz = window.QUIZZES[m.quizId];
      localStorage.setItem('oq_last', JSON.stringify({ pin: p, name: name, school: school, nick: nick }));
      var pRef = getDb().ref('rooms/' + pin + '/players/' + pid);
      pRef.update({
        name: name, school: school, nick: nick,
        joinedAt: firebase.database.ServerValue.TIMESTAMP, connected: true
      });
      pRef.child('score').transaction(function (cur) { return cur === null ? 0 : cur; });
      pRef.child('connected').onDisconnect().set(false);
      $('lobby-title').textContent = quiz.title;
      $('lobby-nick').textContent = '🙋 ' + nick;
      listenMeta();
    }).catch(function (e) {
      errEl.textContent = '접속 오류: ' + e.message;
      $('btn-join').disabled = false;
    });
  });

  function listenMeta() {
    getDb().ref('rooms/' + pin + '/meta').on('value', function (snap) {
      meta = snap.val();
      if (!meta) return;
      if (meta.state === 'lobby') show('scr-lobby');
      else if (meta.state === 'question') renderQuestion();
      else if (meta.state === 'reveal') renderReveal();
      else if (meta.state === 'podium') renderPodium();
      else if (meta.state === 'ended') renderEnded();
    });
  }

  // ── 문제 ──
  function renderQuestion() {
    var q = quiz.questions[meta.qIndex];
    if (!q) return;
    show('scr-question');
    $('q-num').textContent = 'Q' + (meta.qIndex + 1) + ' / ' + quiz.questions.length;
    if (q.image) {
      $('q-image').style.display = 'block';
      $('q-image').querySelector('img').src = q.image;
    } else {
      $('q-image').style.display = 'none';
    }
    $('q-prompt').textContent = q.prompt;
    $('q-submitted').style.display = 'none';

    var box = $('q-choices');
    box.innerHTML = '';
    box.className = 'choices' + (q.src === 'short' && q.choices.join('').length < 40 ? ' grid2' : '');
    box.style.display = 'grid';
    var marks = ['①', '②', '③', '④', '⑤'];
    q.choices.forEach(function (c, i) {
      var b = document.createElement('button');
      b.className = 'choice';
      b.innerHTML = '<span class="mark">' + marks[i] + '</span>' + esc(c);
      b.addEventListener('click', function () { submit(q, i, b); });
      box.appendChild(b);
    });

    // 이미 제출한 문제(새로고침 재입장)면 잠금
    if (myAnswered[meta.qIndex] !== undefined) { lock(myAnswered[meta.qIndex]); }
    else {
      getDb().ref('rooms/' + pin + '/answers/' + meta.qIndex + '/' + pid).once('value').then(function (s) {
        if (s.exists()) { myAnswered[meta.qIndex] = s.val().choice; lock(s.val().choice); }
      });
    }
    startTimer(q);
  }

  function lock(choiceIdx) {
    var btns = document.querySelectorAll('#q-choices .choice');
    btns.forEach(function (b, i) {
      b.disabled = true;
      if (i === choiceIdx) b.classList.add('picked'); else b.classList.add('dim');
    });
    $('q-submitted').style.display = 'block';
  }

  function submit(q, i) {
    if (myAnswered[meta.qIndex] !== undefined) return;
    var limitMs = (q.timeLimit || quiz.timeLimit) * 1000;
    var remain = Math.max(0, meta.qDeadline - serverNow());
    myAnswered[meta.qIndex] = i;
    getDb().ref('rooms/' + pin + '/answers/' + meta.qIndex + '/' + pid).set({
      choice: i, remainMs: remain, limitMs: limitMs
    });
    lock(i);
  }

  function startTimer(q) {
    clearInterval(timerIv);
    var limitMs = (q.timeLimit || quiz.timeLimit) * 1000;
    function tick() {
      var remain = Math.max(0, meta.qDeadline - serverNow());
      var sec = Math.ceil(remain / 1000);
      $('q-timer').textContent = sec;
      $('q-timer').classList.toggle('hurry', sec <= 5);
      $('q-timebar').classList.toggle('hurry', sec <= 5);
      $('q-timebar').firstElementChild.style.width = (remain / limitMs * 100) + '%';
      if (remain <= 0) clearInterval(timerIv);
    }
    tick();
    timerIv = setInterval(tick, 200);
  }

  // ── 문제 결과 ──
  function renderReveal() {
    clearInterval(timerIv);
    show('scr-reveal');
    var q = quiz.questions[meta.qIndex];
    getDb().ref('rooms/' + pin + '/reveal/' + meta.qIndex).once('value').then(function (snap) {
      var rv = snap.val();
      if (!rv) return;
      var my = myAnswered[meta.qIndex];
      var correct = my === rv.correct;
      $('rv-mark').className = 'result-big ' + (correct ? 'o' : 'x');
      $('rv-mark').textContent = my === undefined ? '⏰ 시간 초과!' : (correct ? '⭕ 정답!' : '❌ 오답!');
      var gained = (rv.gains && rv.gains[pid]) || 0;
      $('rv-pts').textContent = '+' + gained + '점';
      getDb().ref('rooms/' + pin + '/players/' + pid + '/score').once('value').then(function (s) {
        $('rv-total').textContent = '내 총점: ' + (s.val() || 0) + '점';
      });
      var html = '';
      (rv.top5 || []).forEach(function (r, i) {
        html += '<div class="row' + (r.nick === myNick ? ' me' : '') + '"><span><span class="r">' + (i + 1) + '위</span>' + esc(r.nick) + '</span><span>' + r.score + '점</span></div>';
      });
      $('rv-top5').innerHTML = html;
    });
  }

  // ── 발표/종료 ──
  function renderPodium() {
    show('scr-podium');
    getDb().ref('rooms/' + pin + '/final/ranks').once('value').then(function (snap) {
      var ranks = snap.val() || [];
      for (var i = 0; i < ranks.length; i++) {
        if (ranks[i].pid === pid) {
          $('pd-mine').textContent = '내 최종 성적: ' + (i + 1) + '위 · ' + ranks[i].score + '점';
          return;
        }
      }
    });
  }

  function renderEnded() {
    show('scr-ended');
    getDb().ref('rooms/' + pin + '/final/ranks').once('value').then(function (snap) {
      var ranks = snap.val() || [];
      for (var i = 0; i < ranks.length; i++) {
        if (ranks[i].pid === pid) {
          $('end-mine').textContent = '최종 ' + (i + 1) + '위 · ' + ranks[i].score + '점';
          return;
        }
      }
    });
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
})();
