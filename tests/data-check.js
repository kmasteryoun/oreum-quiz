// 데이터 무결성 검사: node tests/data-check.js
var fs = require('fs');
var path = require('path');
global.window = {};
['hunmin', 'yongbi', 'sohak'].forEach(function (q) {
  eval(fs.readFileSync(path.join(__dirname, '..', 'data', q + '.js'), 'utf8'));
  eval(fs.readFileSync(path.join(__dirname, '..', 'data', 'raw-' + q + '.js'), 'utf8'));
});
var fail = 0;
function err(msg) { console.error('FAIL', msg); fail = 1; }

['hunmin', 'yongbi', 'sohak'].forEach(function (qid) {
  var quiz = global.window.QUIZZES[qid];
  // 학생정보 3문항 중 short는 '이름' 하나뿐(학교/학년은 radio) → slice(1)
  var raw = global.window.RAW[qid].items.filter(function (it) { return it.type === 'short' || it.type === 'check'; }).slice(1);
  if (quiz.questions.length !== raw.length) err(qid + ': 문항 수 불일치 data=' + quiz.questions.length + ' raw=' + raw.length);
  var ids = {};
  quiz.questions.forEach(function (q, i) {
    if (ids[q.id]) err(qid + ': id 중복 ' + q.id);
    ids[q.id] = 1;
    if (!q.prompt) err(q.id + ': prompt 없음');
    if (!Array.isArray(q.choices) || q.choices.length < 4) err(q.id + ': 선지 4개 미만');
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.choices.length) err(q.id + ': answer 인덱스 오류');
    if (q.image && !fs.existsSync(path.join(__dirname, '..', q.image))) err(q.id + ': 이미지 없음 ' + q.image);
    var dedup = {};
    q.choices.forEach(function (c) { if (dedup[c]) err(q.id + ': 선지 중복 "' + c + '"'); dedup[c] = 1; });
    // 합답형: 정답 조합이 원본 정답 개수와 맞는지
    var r = raw[i];
    if (q.src === 'hapdap' && r && r.grading && r.grading[1]) {
      var nCorrect = r.grading[1].length;
      var picked = q.choices[q.answer].split(',').length;
      if (nCorrect !== picked) err(q.id + ': 합답형 정답 개수 불일치 원본=' + nCorrect + ' 선택=' + picked + ' (' + q.choices[q.answer] + ')');
    }
    if (q.src === 'mc' && r && r.grading && r.grading[1]) {
      if (r.grading[1].length !== 1) err(q.id + ': mc인데 원본 정답 ' + r.grading[1].length + '개');
      var origAns = r.grading[1][0][0];
      if (q.choices[q.answer] !== origAns) err(q.id + ': mc 정답 불일치\n  데이터: ' + q.choices[q.answer] + '\n  원본:   ' + origAns);
    }
  });
  console.log(qid + ': ' + quiz.questions.length + '문항 검사 완료');
});
process.exit(fail);
