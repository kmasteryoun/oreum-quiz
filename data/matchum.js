// [오름] 복습 퀴즈 배틀 — 한글맞춤법 (교과서)
// 원본: 카훗 "한글맞춤법 (교과서)" (8ebab41d-32f1-4949-9854-49d3eda70eb3), 31문항 전부 2지선다
// ⚠ 카훗 원본에서 정답이 표준 맞춤법과 다르게 설정돼 있던 3문항(m09·m10·m23)은
//    표준 기준으로 수정함 — 검수 필요 (아래 주석 참고)
window.QUIZZES = window.QUIZZES || {};
window.QUIZZES.matchum = {
  id: 'matchum',
  title: '한글맞춤법',
  timeLimit: 20,
  questions: [
    { id: 'm01', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['옷 한 벌', '옷 한벌'], answer: 0 },
    { id: 'm02', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['해슥하다', '해쓱하다'], answer: 1 },
    { id: 'm03', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['나예요', '나에요'], answer: 0 },
    { id: 'm04', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['아니예요', '아니에요'], answer: 1 },
    { id: 'm05', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['네 시간만에', '네 시간 만에'], answer: 1 },
    { id: 'm06', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['곰곰히', '곰곰이'], answer: 1 },
    { id: 'm07', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['틈틈히', '틈틈이'], answer: 1 },
    { id: 'm08', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['나란히', '나란이'], answer: 0 },
    // m09: 카훗 원본은 '일일히'가 정답 처리돼 있었음 → 표준('일일이')으로 수정
    { id: 'm09', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['일일히', '일일이'], answer: 1 },
    // m10: 카훗 원본은 '꼼꼼이'가 정답 처리돼 있었음 → 표준('꼼꼼히')으로 수정
    { id: 'm10', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['꼼꼼히', '꼼꼼이'], answer: 0 },
    { id: 'm11', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['왠일이죠', '웬일이죠'], answer: 1 },
    { id: 'm12', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['돼요', '되요'], answer: 0 },
    { id: 'm13', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['봬요', '뵈요'], answer: 0 },
    { id: 'm14', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['어찌나 예쁘든지!', '어찌나 예쁘던지!'], answer: 1 },
    { id: 'm15', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['아는 대로', '아는대로'], answer: 0 },
    { id: 'm16', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['비가 오기는 커녕', '비가 오기는커녕'], answer: 1 },
    { id: 'm17', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['이해 뿐입니다.', '이해뿐입니다.'], answer: 1 },
    { id: 'm18', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['출생율', '출생률'], answer: 1 },
    { id: 'm19', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['할인율', '할인률'], answer: 0 },
    { id: 'm20', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['내재율', '내재률'], answer: 0 },
    { id: 'm21', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['외형율', '외형률'], answer: 1 },
    { id: 'm22', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['누구 보다도', '누구보다도'], answer: 1 },
    // m23: 카훗 원본은 '창 밖을 봐.'가 정답 처리돼 있었음 → '창밖'은 합성어(사전 등재)라 붙여 쓰는 게 표준이므로 수정
    { id: 'm23', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['창밖을 봐.', '창 밖을 봐.'], answer: 0 },
    { id: 'm24', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['역시 너밖에 없다.', '역시 너 밖에 없다.'], answer: 0 },
    { id: 'm25', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['햇님', '해님'], answer: 1 },
    { id: 'm26', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['인삿말', '인사말'], answer: 1 },
    { id: 'm27', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['갯수', '개수'], answer: 1 },
    { id: 'm28', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['머릿말', '머리말'], answer: 1 },
    { id: 'm29', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['노랫말', '노래말'], answer: 0 },
    { id: 'm30', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['앉던지 서던지 해.', '앉든지 서든지 해.'], answer: 1 },
    { id: 'm31', image: null, src: 'mc', prompt: '다음 중 한글맞춤법에 맞는 것은?', choices: ['진작 와 볼 걸!', '진작 와 볼 껄!'], answer: 0 }
  ]
};
