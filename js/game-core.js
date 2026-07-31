// [오름] 복습 퀴즈 배틀 — 순수 게임 로직 (브라우저/node 겸용)
(function (root) {
  var G = {};

  // 정답: round(1000 × 남은시간 비율), 오답/미응답: 0
  G.calcScore = function (correct, remainMs, limitMs) {
    if (!correct) return 0;
    var r = Math.max(0, Math.min(1, remainMs / limitMs));
    return Math.round(1000 * r);
  };

  G.genPin = function () {
    return String(Math.floor(100000 + Math.random() * 900000));
  };

  // answers: {pid: {choice}} → 선지별 응답 수 배열
  G.tally = function (answers, nChoices) {
    var c = [];
    for (var i = 0; i < nChoices; i++) c.push(0);
    for (var k in answers) {
      var ch = answers[k].choice;
      if (ch >= 0 && ch < nChoices) c[ch]++;
    }
    return c;
  };

  // players: {pid: {nick, name, score}} → 점수 내림차순(동점 시 닉네임순) 배열
  G.rank = function (players) {
    var arr = [];
    for (var k in players) {
      arr.push({ pid: k, nick: players[k].nick, name: players[k].name, score: players[k].score || 0 });
    }
    arr.sort(function (a, b) { return b.score - a.score || a.nick.localeCompare(b.nick); });
    return arr;
  };

  // Fisher-Yates 셔플 (원본 보존, 새 배열 반환)
  G.shuffle = function (arr, rnd) {
    rnd = rnd || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  // 방 생성 시 1회 생성: 문항 순서 + 문항별 선지 순서 (전원 동일하게 공유)
  G.makeShuffle = function (quiz, rnd) {
    var order = G.shuffle(quiz.questions.map(function (_, i) { return i; }), rnd);
    var choices = quiz.questions.map(function (q) {
      return G.shuffle(q.choices.map(function (_, i) { return i; }), rnd);
    });
    return { order: order, choices: choices };
  };

  if (typeof module !== 'undefined') module.exports = G;
  root.GameCore = G;
})(this);
