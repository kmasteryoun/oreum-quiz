// 순수 로직 테스트: node tests/game-core.test.js
var G = require('../js/game-core.js');
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) { console.error('FAIL', msg, JSON.stringify(a), '!=', JSON.stringify(b)); process.exitCode = 1; }
  else console.log('ok', msg);
}

eq(G.calcScore(true, 20000, 20000), 1000, '즉답 1000점');
eq(G.calcScore(true, 10000, 20000), 500, '절반 500점');
eq(G.calcScore(true, 0, 20000), 0, '시간종료 직전 0점');
eq(G.calcScore(false, 20000, 20000), 0, '오답 0점');
eq(G.calcScore(true, 25000, 20000), 1000, '상한 1000');
eq(G.calcScore(true, -100, 20000), 0, '음수 방어');

var pin = G.genPin();
eq(pin.length, 6, 'PIN 6자리');
eq(/^[0-9]{6}$/.test(pin), true, 'PIN 숫자만');

eq(G.tally({ a: { choice: 0 }, b: { choice: 2 }, c: { choice: 0 } }, 4), [2, 0, 1, 0], '선지 분포');
eq(G.tally({}, 5), [0, 0, 0, 0, 0], '무응답 분포');
eq(G.tally({ a: { choice: 9 } }, 4), [0, 0, 0, 0], '범위 밖 무시');

var ranked = G.rank({
  a: { nick: 'A', name: '가', score: 300 },
  b: { nick: 'B', name: '나', score: 900 },
  c: { nick: 'C', name: '다', score: 900 }
});
eq(ranked[0].nick, 'B', '동점 시 닉네임순 1위 B');
eq(ranked[1].nick, 'C', '동점 시 닉네임순 2위 C');
eq(ranked[2].score, 300, '3위 점수');
eq(ranked[0].name, '나', '실명 포함');

// 셔플
var src = [0, 1, 2, 3, 4];
var sh = G.shuffle(src);
eq(src, [0, 1, 2, 3, 4], 'shuffle은 원본 보존');
eq(sh.slice().sort(), [0, 1, 2, 3, 4], 'shuffle은 원소 보존');
var fakeQuiz = { questions: [{ choices: ['a', 'b', 'c', 'd'] }, { choices: ['x', 'y', 'z', 'w', 'v'] }] };
var s = G.makeShuffle(fakeQuiz);
eq(s.order.slice().sort(), [0, 1], 'order는 문항 인덱스 순열');
eq(s.choices.length, 2, '문항별 선지 맵 개수');
eq(s.choices[0].slice().sort(), [0, 1, 2, 3], '선지 맵 0 순열');
eq(s.choices[1].slice().sort().join(','), '0,1,2,3,4', '선지 맵 1 순열');
// 고정 시드로 실제 섞임 확인
var seq = [0.9, 0.1, 0.5, 0.3, 0.7]; var k = 0;
var rnd = function () { return seq[k++ % seq.length]; };
eq(G.shuffle([0, 1, 2, 3, 4], rnd).join('') !== '01234', true, '시드 셔플로 순서 변경');
