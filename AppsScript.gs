// [오름] 복습 퀴즈 배틀 — 결과 기록용 Apps Script
// 사용법: 결과 기록용 구글 시트에서 [확장 프로그램 > Apps Script]에 이 코드를 붙여넣고
// [배포 > 새 배포 > 웹 앱], 액세스 권한 "모든 사용자"로 배포한 뒤 URL을 config.js의 sheetWebhook에 넣으세요.
//
// 시트 구조: 시험(퀴즈)별로 탭 하나씩. 같은 시험을 여러 번 진행하면 같은 탭에 누적된다.
// 열: 날짜 | PIN | 순위 | 실명 | 학교 | 닉네임 | 총점 | 문항별(원본 번호 순, O(점수)/X(고른 선지)/-)
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(d.quizTitle);
  if (!sh) {
    sh = ss.insertSheet(d.quizTitle);
    var head = ['날짜', 'PIN', '순위', '실명', '학교', '닉네임', '총점'];
    d.questionIds.forEach(function (q) { head.push(q); });
    sh.appendRow(head);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#E8F1EC');
    sh.setFrozenRows(1);
    sh.setFrozenColumns(7);
  }
  d.rows.forEach(function (r) {
    sh.appendRow([d.date, d.pin].concat(r));
  });
  return ContentService.createTextOutput('ok');
}
