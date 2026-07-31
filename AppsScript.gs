// [오름] 복습 퀴즈 배틀 — 결과 기록용 Apps Script
// 사용법: 결과 기록용 구글 시트에서 [확장 프로그램 > Apps Script]에 이 코드를 붙여넣고
// [배포 > 새 배포 > 웹 앱], 액세스 권한 "모든 사용자"로 배포한 뒤 URL을 config.js의 sheetWebhook에 넣으세요.
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = d.quizTitle + ' ' + d.date + ' (PIN ' + d.pin + ')';
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name, 0);
    var head = ['순위', '실명', '학교', '닉네임', '총점'];
    d.questionIds.forEach(function (q) { head.push(q); });
    sh.appendRow(head);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#E8F1EC');
    sh.setFrozenRows(1);
  }
  d.rows.forEach(function (r) { sh.appendRow(r); });
  return ContentService.createTextOutput('ok');
}
