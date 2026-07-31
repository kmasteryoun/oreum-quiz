// [오름] 복습 퀴즈 배틀 — 세종어제훈민정음
// 원본: [오름] 고전문법 세종어제훈민정음 복습시험 (2026 여름) 구글 폼
// src: short=단답형→4지선다 변환, mc=원본 객관식(단일정답), hapdap=복수선택→합답형 변환
window.QUIZZES = window.QUIZZES || {};
window.QUIZZES.hunmin = {
  id: 'hunmin',
  title: '세종어제훈민정음',
  timeLimit: 20,
  questions: [
    // ─── 1. 나·랏 ───
    { id: 'h01a', image: 'img/hunmin/w01.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['나라의', '나라가', '나라를', '나라마다'], answer: 0 },
    { id: 'h01b', image: 'img/hunmin/w01.png', src: 'short',
      prompt: "위 단어에서 'ㅅ'의 품사로 알맞은 것은?",
      choices: ['관형격 조사', '주격 조사', '목적격 조사', '부사격 조사'], answer: 0 },
    { id: 'h01c', image: 'img/hunmin/w01.png', src: 'hapdap', timeLimit: 25,
      prompt: '다음 중, 위 단어를 통해 알 수 있는 사실을 모두 고른 것은?\nㄱ. 하나의 자음이 하나의 조사 역할을 수행할 수 있다.\nㄴ. 하나의 음운이 하나의 조사 역할을 수행할 수 있다.\nㄷ. 하나의 자음이 하나의 단어 역할을 수행할 수 있다.\nㄹ. 하나의 음운이 하나의 단어 역할을 수행할 수 있다.\nㅁ. 하나의 음운이 하나의 품사 역할을 수행할 수 있다.',
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ, ㅁ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 4 },

    // ─── 2. :말ᄊᆞ·미 ───
    { id: 'h02a', image: 'img/hunmin/w02.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['말이', '말씀이', '말을', '말씀을'], answer: 0 },
    { id: 'h02b', image: 'img/hunmin/w02.png', src: 'hapdap', timeLimit: 25,
      prompt: '다음 중, 위 단어를 통해 알 수 있는 사실을 모두 고른 것은?\nㄱ. 이어적기의 표기 방식이 적용되었다.\nㄴ. 연철의 표기 방식이 적용되었다.\nㄷ. 표의주의 원리가 적용되었다.\nㄹ. 현대 국어에서 장음으로 쓰이는 방점이 사용되었다.\nㅁ. 현대 국어와 같은 형태의 주격 조사가 쓰였다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㅁ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 1 },
    { id: 'h02c', image: 'img/hunmin/w02.png', src: 'hapdap', timeLimit: 25,
      prompt: '다음 중, 위 단어를 통해 알 수 있는 사실이 아닌 것을 모두 고른 것은?\nㄱ. 현대 문법 상에서 의미가 변화된 단어가 쓰였다.\nㄴ. 현대 문법 상에서 의미가 축소된 단어가 쓰였다.\nㄷ. 현대 문법 상에서 의미가 확대된 단어가 쓰였다.\nㄹ. 현대 문법 상에서 의미가 이동한 단어가 쓰였다.\nㅁ. 현대 문법 상에서 쓰지 않는 단어가 쓰였다.',
      choices: ['ㄱ, ㄴ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄹ, ㅁ', 'ㄷ, ㄹ'], answer: 2 },
    { id: 'h02d', image: 'img/hunmin/w02.png', src: 'short',
      prompt: "중세 국어에서의 '어리다'의 의미가, 현대 국어에서 변화된 양상으로 알맞은 것은?",
      choices: ['의미의 이동', '의미의 축소', '의미의 확대', '의미 변화 없음'], answer: 0 },

    // ─── 3. 中듕國·귁·에 ───
    { id: 'h03a', image: 'img/hunmin/w03.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['중국과', '중국에', '중국이', '중국을'], answer: 0 },
    { id: 'h03b', image: 'img/hunmin/w03.png', src: 'short',
      prompt: "'에'의 품사로 알맞은 것은?",
      choices: ['비교 부사격 조사', '처소 부사격 조사', '관형격 조사', '접속 조사'], answer: 0 },
    { id: 'h03c', image: 'img/hunmin/w03.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 동국정운식 표기가 사용되었다.\nㄴ. '듕'의 'ㅇ'은 실제로 발음이 되지 않는 형식 종성이다.\nㄷ. '듕'의 'ㅇ'은 실제로 발음이 되는 형식 종성이다.\nㄹ. '듕'의 'ㅇ'은 실제로 발음이 되지 않는 음운이다.\nㅁ. '듕'의 'ㅇ'은 실제로 발음이 되는 음운이다.",
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄱ, ㅁ', 'ㄴ, ㄹ', 'ㄷ, ㅁ'], answer: 2 },

    // ─── 4. 달·아 ───
    { id: 'h04a', image: 'img/hunmin/w04.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['달라', '달아', '다르게도', '닳아'], answer: 0 },
    { id: 'h04b', image: 'img/hunmin/w04.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 현대어에서는 '르' 불규칙 활용이 사용되었다.\nㄴ. 현대어에서는 'ㄹㄹ 활용형'의 형태로 사용되었다.\nㄷ. 중세국어에서는 'ㄹㄹ 활용형'의 형태로 사용되었다.\nㄹ. 표음주의의 원리가 적용되지 않았다.\nㅁ. 위 단어의 초성 'ㅇ'은 음가가 없다.",
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㅁ', 'ㄷ, ㄹ, ㅁ'], answer: 0 },

    // ─── 5. 文문字·ᄍᆞᆼ·와·로 ───
    { id: 'h05a', image: 'img/hunmin/w05.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['문자와', '문자로', '문자를', '문자와도'], answer: 0 },
    { id: 'h05b', image: 'img/hunmin/w05.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 단어에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 동국정운식 표기가 활용되었다.\nㄴ. 이 단어에서 받침에 쓰인 'ㅇ'은 형식 종성으로, 발음되지 않는다.\nㄷ. 이 단어에서 받침에 쓰인 'ㅇ'은 형식 종성으로, 발음이 된다.\nㄹ. 이 단어에서 받침에 쓰인 'ㅇ'은 실제 음운으로, 발음되지 않는다.\nㅁ. 이 단어에서 받침에 쓰인 'ㅇ'은 실제 음운으로, 발음이 된다.",
      choices: ['ㄱ, ㄴ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㅁ', 'ㄹ, ㅁ'], answer: 2 },

    // ─── 6. 서르 ───
    { id: 'h06a', image: 'img/hunmin/w06.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['서로', '서서', '스스로', '서로가'], answer: 0 },
    { id: 'h06b', image: 'img/hunmin/w06.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 하나의 단어 내에서 모음 조화가 엄격하게 지켜졌다.\nㄴ. 하나의 부사 내에서 모음 조화가 엄격하게 지켜졌다.\nㄷ. 하나의 품사 내에서 모음 조화가 엄격하게 지켜졌다.\nㄹ. 하나의 형태소 내에서 모음 조화가 엄격하게 지켜졌다.\nㅁ. 두 개의 형태소 내에서 모음 조화가 엄격하게 지켜졌다.',
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 3 },

    // ─── 7. ᄉᆞᄆᆞᆺ·디 ───
    { id: 'h07a', image: 'img/hunmin/w07.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['통하지', '사무치지', '못하지', '삼가지'], answer: 0 },
    { id: 'h07b', image: 'img/hunmin/w07.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 구개음화가 사용되지 않았다.\nㄴ. 7종성법에 의해서 기본형과 다른 형태로 활용되었다.\nㄷ. 중세국어에서는 받침에서 'ㅅ'이 발음되었다.\nㄹ. 표의주의 원리에 의해서 활용형의 표기가 결정되었다.\nㅁ. 발음할 때, 음운의 동화 현상이 일어났다.",
      choices: ['ㄱ, ㄷ', 'ㄱ, ㄴ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㅁ'], answer: 0 },

    // ─── 8. 아·니 ───
    { id: 'h08a', image: 'img/hunmin/w08.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['아니', '아니다', '않이', '안에'], answer: 0 },

    // ─── 9. ᄒᆞᆯᄊᆡ ───
    { id: 'h09a', image: 'img/hunmin/w09.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['하므로', '할 새', '하시매', '할수록'], answer: 0 },
    { id: 'h09b', image: 'img/hunmin/w09.png', src: 'short',
      prompt: '위 단어의 발음으로 알맞은 것은?',
      choices: ['할싸이', '할새', '할쌔', '하르새'], answer: 0 },
    { id: 'h09c', image: 'img/hunmin/w09.png', src: 'mc', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것은?',
      choices: ['위 단어에서는 이유를 나타내는 대등적 연결 어미가 사용되었다.', '위 단어에서는 결과를 나타내는 종속적 연결 어미가 사용되었다.', "중세 국어에서는 현대 국어와 마찬가지로, 'ㅐ'가 이중모음으로 발음되었다.", "중세 국어에서는 현대 국어와 마찬가지로, 'ㅐ'가 단모음으로 발음되었다.", '위 단어에서는 이유를 나타내는 종속적 연결 어미가 사용되었다.'], answer: 4 },

    // ─── 10. ·이런 ───
    { id: 'h10a', image: 'img/hunmin/w10.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이런', '이렇게', '저런', '그런'], answer: 0 },

    // ─── 11. 젼·ᄎᆞ·로 ───
    { id: 'h11a', image: 'img/hunmin/w11.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이유로', '앞으로', '진짜로', '저절로'], answer: 0 },
    { id: 'h11b', image: 'img/hunmin/w11.png', src: 'short',
      prompt: "위 단어에서 '-로'의 품사로 알맞은 것은?",
      choices: ['부사격 조사', '관형격 조사', '목적격 조사', '보조사'], answer: 0 },

    // ─── 12. 어·린 ───
    { id: 'h12a', image: 'img/hunmin/w12.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['어리석은', '어린', '나이 적은', '어리광스러운'], answer: 0 },
    { id: 'h12b', image: 'img/hunmin/w12.png', src: 'short',
      prompt: "중세 국어에서의 '어리다'의 의미가, 현대 국어에서 변화된 양상으로 알맞은 것은?",
      choices: ['의미의 이동', '의미의 축소', '의미의 확대', '의미 변화 없음'], answer: 0 },

    // ─── 13. 百·ᄇᆡᆨ姓·셔ᇰ·이 ───
    { id: 'h13a', image: 'img/hunmin/w13.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['백성이', '백성은', '백성을', '백성의'], answer: 0 },
    { id: 'h13b', image: 'img/hunmin/w13.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어에 해당하는 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 동국정운식 표기가 사용되었다.\nㄴ. 이 단어에서 받침에 쓰인 'ㅇ'은 형식종성으로, 발음이 된다.\nㄷ. 이 단어에서 받침에 쓰인 'ㅇ'은 실제 음운으로, 발음이 된다.\nㄹ. 이 단어에서 받침에 쓰인 'ㅇ'은 형식종성으로, 발음이 되지 않는다.\nㅁ. 이 단어에서 받침에 쓰인 'ㅇ'은 실제 음운으로, 발음이 되지 않는다.",
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄱ, ㄹ', 'ㄴ, ㄷ', 'ㄷ, ㅁ'], answer: 1 },

    // ─── 14. 니르·고·져 ───
    { id: 'h14a', image: 'img/hunmin/w14.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이르고자', '이르고서', '이를수록', '이르러서'], answer: 0 },
    { id: 'h14b', image: 'img/hunmin/w14.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 중세국어가 쓰이던 당시에는 두음법칙이 적용되었다.\nㄴ. 중세국어에서 현대국어로 넘어오면서, 음운의 탈락이 적용되었다.\nㄷ. 중세국어가 쓰이던 당시에는 두음법칙이 적용되지 않았다.\nㄹ. 중세국어가 쓰이던 당시에는 두음법칙이 적용되었으나, 발음에는 반영되지 않았다.\nㅁ. 중세국어가 쓰이던 당시에는 두음법칙이 적용되었고, 발음에도 반영이 되었다.',
      choices: ['ㄱ, ㄴ', 'ㄴ, ㄷ', 'ㄷ, ㄹ', 'ㄴ, ㄹ', 'ㄱ, ㅁ'], answer: 1 },

    // ─── 15. ·호ᇙ ───
    { id: 'h15a', image: 'img/hunmin/w15.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['할', '하는', '했을', '하올'], answer: 0 },
    { id: 'h15b', image: 'img/hunmin/w15.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어의 '어미'에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 선어말어미는 사용되지 않았다.\nㄴ. 의미 상의 목적어를 표시하는 기능을 가진 어미가 쓰였다.\nㄷ. 관형사형 전성어미가 쓰였다.\nㄹ. 어말어미는 쓰였으나, 종결어미는 사용되지 않았다.\nㅁ. 의미 상의 주어를 표시하는 기능을 가진 어미가 쓰였다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ', 'ㄴ, ㄹ, ㅁ'], answer: 1 },
    { id: 'h15c', image: 'img/hunmin/w15.png', src: 'hapdap', timeLimit: 25,
      prompt: '여린 히읗에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 우리말을 표기할 때 자주 쓰였다.\nㄴ. 동국정운식 표기에 자주 쓰였다.\nㄷ. 관형어 표시 부호로 쓰였다.\nㄹ. 뒤에 오는 말을 거센소리로 발음하게 하는 거센소리 발음 부호로 쓰였다.\nㅁ. 부사어 표시 부호로 쓰였다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄹ, ㅁ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㅁ'], answer: 2 },

    // ─── 16. ·배 ───
    { id: 'h16a', image: 'img/hunmin/w16.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['바가', '배가', '바를', '바에'], answer: 0 },
    { id: 'h16b', image: 'img/hunmin/w16.png', src: 'short',
      prompt: '위 단어의 발음으로 알맞은 것은?',
      choices: ['빠이', '배', '바이', '빠'], answer: 0 },
    { id: 'h16c', image: 'img/hunmin/w16.png', src: 'hapdap', timeLimit: 25,
      prompt: "15세기의 주격 조사에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 주격 조사 '-가'가 쓰였다.\nㄴ. 주격 조사 '-이'가 쓰였다.\nㄷ. 주격 조사가 드러나지 않는 경우도 있었다.\nㄹ. 앞말이 자음으로 끝나면 항상 '-이'가 쓰인다.\nㅁ. 앞말이 모음으로 끝나면 항상 '-ㅣ'가 쓰인다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄴ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㅁ'], answer: 1 },

    // ─── 17. 이셔·도 ───
    { id: 'h17a', image: 'img/hunmin/w17.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['있어도', '이어서도', '있어서', '계셔도'], answer: 0 },

    // ─── 18. ᄆᆞᄎᆞᆷ:내 ───
    { id: 'h18a', image: 'img/hunmin/w18.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['마침내', '마지막', '마침', '끝끝내'], answer: 0 },

    // ─── 19. 제 ───
    { id: 'h19a', image: 'img/hunmin/w19.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['저의', '제가', '자기가', '저를'], answer: 0 },
    { id: 'h19b', image: 'img/hunmin/w19.png', src: 'short',
      prompt: '이 단어에서 쓰인 조사의 종류로 알맞은 것은?',
      choices: ['관형격 조사', '주격 조사', '부사격 조사', '서술격 조사'], answer: 0 },

    // ─── 20. ·ᄠᅳ·들 ───
    { id: 'h20a', image: 'img/hunmin/w20.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['뜻을', '뜻이', '뜰을', '땅을'], answer: 0 },
    { id: 'h20b', image: 'img/hunmin/w20.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 각자병서가 사용되었다.\nㄴ. 어두자음군이 사용되었다.\nㄷ. 모음조화를 엄격하게 지키고 있다.\nㄹ. 표의주의 원리가 적용되었다.\nㅁ. 이어적기의 방식이 사용되었다.',
      choices: ['ㄱ, ㄷ, ㅁ', 'ㄴ, ㄷ, ㄹ', 'ㄴ, ㄷ, ㅁ', 'ㄱ, ㄴ, ㄹ', 'ㄷ, ㄹ, ㅁ'], answer: 2 },
    { id: 'h20c', image: 'img/hunmin/w20.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 중세국어의 목적격 조사에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 현대국어와 같은 형태인 목적격 조사가 존재한다.\nㄴ. 앞말에 받침이 있으면, '을'만 사용할 수 있다.\nㄷ. 앞말에 받침이 없으면 '를'만 사용할 수 있다.\nㄹ. 현대국어와 같은 형태인 목적격 조사가 2개 있다.\nㅁ. 앞말에 받침이 있으면 '를'만 사용할 수 있다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄴ, ㄷ, ㅁ', 'ㄱ, ㄹ, ㅁ', 'ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 21. 시·러 ───
    { id: 'h21a', image: 'img/hunmin/w21.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['능히', '실어', '슬퍼', '얻어서'], answer: 0 },

    // ─── 22. 펴·디 ───
    { id: 'h22a', image: 'img/hunmin/w22.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['펴지', '펴서', '펴되', '피지'], answer: 0 },
    { id: 'h22b', image: 'img/hunmin/w22.png', src: 'short',
      prompt: '위 단어에서 추론할 수 있는, 현대국어에서는 적용되지만 중세국어에서는 적용되지 않았던 음운변동 법칙은?',
      choices: ['구개음화', '두음법칙', '원순모음화', '모음조화'], answer: 0 },

    // ─── 23. :몯ᄒᆞᇙ ───
    { id: 'h23a', image: 'img/hunmin/w23.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['못', '못할', '모아', '모든'], answer: 0 },

    // ─── 24. ᄒᆞᇙ(놈) 앞 ───
    { id: 'h24a', image: 'img/hunmin/w24.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['할', '한', '하늘', '했던'], answer: 0 },

    // ─── 25. ·노·미 ───
    { id: 'h25a', image: 'img/hunmin/w25.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['사람이', '놈이', '노비가', '남이'], answer: 0 },
    { id: 'h25b', image: 'img/hunmin/w25.png', src: 'short',
      prompt: '위 단어에서 사용된 의미의 변화 양상으로 알맞은 것은?',
      choices: ['의미의 축소', '의미의 이동', '의미의 확대', '의미 변화 없음'], answer: 0 },

    // ─── 26. 하·니·라 ───
    { id: 'h26a', image: 'img/hunmin/w26.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['많으니라', '하니라', '크니라', '심하니라'], answer: 0 },

    // ─── 27. ·내 ───
    { id: 'h27a', image: 'img/hunmin/w27.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['내가', '나의', '나를', '냇물이'], answer: 0 },

    // ─── 28. ·이·ᄅᆞᆯ ───
    { id: 'h28a', image: 'img/hunmin/w28.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이를', '이르러', '일을', '이것이'], answer: 0 },

    // ─── 29. 爲·윙·ᄒᆞ·야 ───
    { id: 'h29a', image: 'img/hunmin/w29.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['위하여', '위하니', '위해서라도', '하여서'], answer: 0 },

    // ─── 30. :어엿·비 ───
    { id: 'h30a', image: 'img/hunmin/w30.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['가엾이', '예쁘게', '어여쁘게', '의젓하게'], answer: 0 },
    { id: 'h30b', image: 'img/hunmin/w30.png', src: 'short',
      prompt: '위 단어의 의미 변화 양상으로 알맞은 것은?',
      choices: ['의미의 이동', '의미의 축소', '의미의 확대', '의미 변화 없음'], answer: 0 },

    // ─── 31. 너·겨 ───
    { id: 'h31a', image: 'img/hunmin/w31.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['여겨', '넘겨', '넣어', '느껴'], answer: 0 },
    { id: 'h31b', image: 'img/hunmin/w31.png', src: 'short',
      prompt: '위 단어에서 알 수 있는, 현대국어에서는 적용되나 중세국어에서는 적용되지 않는 법칙은?',
      choices: ['두음법칙', '구개음화', '원순모음화', '유음화'], answer: 0 },

    // ─── 32. ·새·로 ───
    { id: 'h32a', image: 'img/hunmin/w32.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['새로', '사이로', '새가', '세로로'], answer: 0 },

    // ─── 33. ·스·믈여·듧字·ᄍᆞᆼ·ᄅᆞᆯ ───
    { id: 'h33a', image: 'img/hunmin/w33.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['스물여덟 자를', '스물여덟 자가', '스무여덟 자를', '스물일곱 자를'], answer: 0 },
    { id: 'h33b', image: 'img/hunmin/w33.png', src: 'short',
      prompt: '위 단어에서 알 수 있는, 현대국어에서는 적용되나 중세국어에서는 적용되지 않는 현상은?',
      choices: ['원순모음화', '두음법칙', '구개음화', '전설모음화'], answer: 0 },

    // ─── 34. ᄆᆡᇰ·ᄀᆞ노·니 ───
    { id: 'h34a', image: 'img/hunmin/w34.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['만드노니', '맹세하노니', '만들었으니', '명하노니'], answer: 0 },
    { id: 'h34b', image: 'img/hunmin/w34.png', src: 'hapdap', timeLimit: 25,
      prompt: "위 단어에 쓰인 '어미'에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 미래시제를 나타내는 선어말 어미가 사용되었다.\nㄴ. 1인칭 주어를 나타내는 선어말 어미가 사용되었다.\nㄷ. 문장이 종속적으로 연결됨을 나타내는 연결 어미가 사용되었다.\nㄹ. 현재시제를 나타내는 어말 어미가 사용되었다.\nㅁ. 문장이 대등하게 이어짐을 나타내는 연결 어미가 사용되었다.",
      choices: ['ㄱ, ㄷ', 'ㄴ, ㄷ', 'ㄴ, ㅁ', 'ㄱ, ㄹ', 'ㄷ, ㄹ'], answer: 1 },

    // ─── 35. :사ᄅᆞᆷ:마·다 ───
    { id: 'h35a', image: 'img/hunmin/w35.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['사람마다', '사람만', '사람이라도', '사람에게다'], answer: 0 },

    // ─── 36. :ᄒᆡ·ᅇᅧ ───
    { id: 'h36a', image: 'img/hunmin/w36.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['하여금', '해서', '하며', '헤아려'], answer: 0 },
    { id: 'h36b', image: 'img/hunmin/w36.png', src: 'short',
      prompt: "위 단어에서 'ㅣ'의 역할로 알맞은 것은?",
      choices: ['사동접미사', '피동접미사', '주격 조사', '명사형 어미'], answer: 0 },

    // ─── 37. :수·ᄫᅵ ───
    { id: 'h37a', image: 'img/hunmin/w37.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['쉬이', '수비', '스스로', '숱하게'], answer: 0 },

    // ─── 38. 니·겨 ───
    { id: 'h38a', image: 'img/hunmin/w38.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['익혀', '이겨', '여겨', '넘겨'], answer: 0 },
    { id: 'h38b', image: 'img/hunmin/w38.png', src: 'short',
      prompt: '위 단어에서 드러나는 사동접미사의 형태로 알맞은 것은?',
      choices: ['-이-', '-히-', '-리-', '-기-'], answer: 0 },

    // ─── 39. ·날·로 ───
    { id: 'h39a', image: 'img/hunmin/w39.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['날로', '나로', '날것으로', '칼날로'], answer: 0 },

    // ─── 40. ·ᄡᅮ·메 ───
    { id: 'h40a', image: 'img/hunmin/w40.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['씀에', '쑤메', '슬픔에', '씀으로'], answer: 0 },
    { id: 'h40b', image: 'img/hunmin/w40.png', src: 'mc', timeLimit: 25,
      prompt: '다음 중, 중세국어의 명사형 전성어미와 명사화 접미사에 대한 설명으로 적절하지 않은 것은?',
      choices: ["중세국어의 명사형 전성어미 형태는 '-옴/-움'이다.", '중세국어의 명사형 전성어미와 명사화 접미사의 형태는 일치한다.', '현대국어의 명사형 전성어미와 명사화 접미사의 형태는 일치한다.', "현대국어의 명사형 전성어미는 '-(으)ㅁ'이다.", '중세국어의 명사형 전성어미와 명사화 접미사는 형태만으로 구분이 가능하다.'], answer: 1 },

    // ─── 41. 便뼌安ᅙᅡᆫ·킈 ───
    { id: 'h41a', image: 'img/hunmin/w41.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['편안하게', '편안한', '편안히도', '불편하게'], answer: 0 },

    // ─── 42. ᄒᆞ고·져 ───
    { id: 'h42a', image: 'img/hunmin/w42.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['하고자', '하고서', '하고도', '하자고'], answer: 0 },

    // ─── 43. ᄒᆞᇙ ───
    { id: 'h43a', image: 'img/hunmin/w43.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['할', '한', '하는', '하여'], answer: 0 },

    // ─── 44. ᄯᆞᄅᆞ·미니·라 ───
    { id: 'h44a', image: 'img/hunmin/w44.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['따름이니라', '딸이니라', '따라서이다', '다름이니라'], answer: 0 },
    { id: 'h44b', image: 'img/hunmin/w44.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 용언처럼 활용되는 조사가 쓰인다.\nㄴ. 객관적 믿음을 나타내는 어미가 쓰였다.\nㄷ. 현재 시제를 나타내는 어미가 쓰였다.\nㄹ. 의미상의 목적어를 나타내는 어미가 쓰였다.',
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄷ', 'ㄴ, ㄹ', 'ㄷ, ㄹ'], answer: 0 },
    { id: 'h44c', image: 'img/hunmin/w44.png', src: 'hapdap', timeLimit: 25,
      prompt: "중세국어의 서술격 조사에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 앞말에 받침이 있을 때에는 '-이다'가 와야 한다.\nㄴ. 앞말에 받침이 없을 때에는 '-다'가 와야 한다.\nㄷ. 앞말이 모음으로 끝날 때에는 '-다'가 와야 한다.\nㄹ. 앞말이 자음으로 끝날 때에는 '-이다'가 와야 한다.\nㅁ. 중세국어의 서술격 조사는 3종류이다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄹ, ㅁ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㅁ'], answer: 2 }
  ]
};
