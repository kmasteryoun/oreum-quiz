// [오름] 복습 퀴즈 배틀 — 용비어천가
// 원본: [오름] 고전문법 용비어천가 복습시험 (2026 여름) 구글 폼
window.QUIZZES = window.QUIZZES || {};
window.QUIZZES.yongbi = {
  id: 'yongbi',
  title: '용비어천가',
  timeLimit: 20,
  questions: [
    // ─── 1. 海東(해동) ───
    { id: 'y01a', image: 'img/yongbi/w01.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['해동', '바다 서쪽', '동쪽 나라', '동해바다'], answer: 0 },

    // ─── 2. 六龍(육룡)·이 ───
    { id: 'y02a', image: 'img/yongbi/w02.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['육룡이', '육룡을', '여섯 용은', '용 여섯의'], answer: 0 },
    { id: 'y02b', image: 'img/yongbi/w02.png', src: 'short',
      prompt: "위 구절에서 '이'의 품사로 알맞은 것은?",
      choices: ['주격 조사', '관형격 조사', '부사격 조사', '서술격 조사'], answer: 0 },

    // ─── 3. ᄂᆞᄅᆞ샤 ───
    { id: 'y03a', image: 'img/yongbi/w03.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['날으시어', '나셔서', '날아가', '나르시어'], answer: 0 },
    { id: 'y03b', image: 'img/yongbi/w03.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 중세국어의 주체높임선어말어미에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 현대국어의 주체높임선어말어미의 종류와 개수가 같다.\nㄴ. '-샤-' 뒤에는 모음으로 시작하는 선어말어미가 온다.\nㄷ. '-시-' 뒤에는 자음으로 시작하는 선어말어미가 온다.\nㄹ. '-샤-' 뒤에 오는 모음으로 시작하는 어미는 생략이 가능하다.\nㅁ. 중세국어에는 현대국어와 형태가 같은 주체높임선어말어미가 있다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㅁ'], answer: 0 },

    // ─── 4. :일:마다 ───
    { id: 'y04a', image: 'img/yongbi/w04.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['일마다', '일만은', '일이라도', '일마저'], answer: 0 },

    // ─── 5. 天福(천복)·이시·니 ───
    { id: 'y05a', image: 'img/yongbi/w05.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['천복이시니', '천복이니', '하늘이 복되니', '천복을 주시니'], answer: 0 },

    // ─── 6. 古聖(고성)·이 ───
    { id: 'y06a', image: 'img/yongbi/w06.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['고성과', '고성이', '옛 성인이', '고성을'], answer: 0 },
    { id: 'y06b', image: 'img/yongbi/w06.png', src: 'short',
      prompt: "위 구절에서 '이'의 품사로 알맞은 것은?",
      choices: ['비교 부사격 조사', '주격 조사', '서술격 조사', '접속 조사'], answer: 0 },
    { id: 'y06c', image: 'img/yongbi/w06.png', src: 'hapdap', timeLimit: 25,
      prompt: "중세국어의 비교부사격조사에 대한 설명으로 옳은 것을 모두 고른 것은?\nㄱ. 비교부사격조사 '-에'는 현대어로 해석하면 '-와/과'라는 의미이다.\nㄴ. 비교부사격조사 '-이'는 현대어로 해석하면 '-와/과'라는 의미이다.\nㄷ. 비교부사격조사 '-도곤'은 현대어로 해석하면 '-보다'라는 의미이다.\nㄹ. 비교부사격조사 '-다이'는 현대어로 해석하면 '-처럼, -답게'라는 의미이다.\nㅁ. 중세국어의 비교부사격조사 중, 다른 기능을 가진 현대국어의 부사격조사와 같은 형태를 가진 것도 있다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄱ, ㄷ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 4 },

    // ─── 7. 同符(동부)ᄒᆞ·시·니 ───
    { id: 'y07a', image: 'img/yongbi/w07.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['똑같으시니', '함께하시니', '다르시니', '부합하는구나'], answer: 0 },

    // ─── 8. 불·휘 ───
    { id: 'y08a', image: 'img/yongbi/w08.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['뿌리가', '뿌리는', '불꽃이', '뿌리를'], answer: 0 },
    { id: 'y08b', image: 'img/yongbi/w08.png', src: 'hapdap', timeLimit: 25,
      prompt: "15세기의 주격 조사에 대한 설명으로 옳은 것을 모두 고른 것은?\nㄱ. 주격조사의 종류는 3가지였다.\nㄴ. 주격조사 '-이'는 앞말이 받침으로 끝나는 경우에 쓰였다.\nㄷ. 주격조사 '-이'는 15세기부터 현재까지 계속 쓰이고 있다.\nㄹ. 주격조사 '-ㅣ'는 앞말이 모음으로 끝나는 경우에 쓰였다.\nㅁ. 현대국어의 주격조사와 같은 형태의 모든 주격조사가 중세국어에서도 쓰였다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄹ', 'ㄱ, ㄷ, ㅁ'], answer: 0 },

    // ─── 9. 기·픈 ───
    { id: 'y09a', image: 'img/yongbi/w09.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['깊은', '깊이', '깊어서', '기쁜'], answer: 0 },

    // ─── 10. 남·ᄀᆞᆫ ───
    { id: 'y10a', image: 'img/yongbi/w10.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['나무는', '나무가', '남쪽은', '나무를'], answer: 0 },
    { id: 'y10b', image: 'img/yongbi/w10.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 'ㄱ 덧붙임 체언'에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 'ㅗ/ㅜ'로 끝나는 체언이 조사와 결합할 때, 발생하는 현상이다.\nㄴ. 형태소와 형태소의 경계에서 일어나는 현상이다.\nㄷ. '나모+이'의 경우, '남기'로 표기된다.\nㄹ. '구무+의'의 경우, '굼긔'로 표기된다.\nㅁ. 현대국어의 음운변동에도 영향을 준 현상이다.",
      choices: ['ㄱ, ㄴ', 'ㄱ, ㅁ', 'ㄴ, ㄷ', 'ㄷ, ㄹ', 'ㄹ, ㅁ'], answer: 1 },
    { id: 'y10c', image: 'img/yongbi/w10.png', src: 'hapdap', timeLimit: 25,
      prompt: '다음 중, 15세기의 모음조화에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 하나의 품사 안에서 엄격하게 지켜졌다.\nㄴ. 하나의 단어 안에서 엄격하게 지켜졌다.\nㄷ. 하나의 형태소 안에서 엄격하게 지켜졌다.\nㄹ. 두 개의 단어가 결합할 때 엄격하게 지켜졌다.\nㅁ. 두 형태소의 경계에서 엄격하게 지켜졌다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 4 },

    // ─── 11. ᄇᆞᄅᆞ·매 ───
    { id: 'y11a', image: 'img/yongbi/w11.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['바람에', '바람이', '바라매', '바람으로'], answer: 0 },
    { id: 'y11b', image: 'img/yongbi/w11.png', src: 'mc', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것은?',
      choices: ['표의주의 원리가 적용되었다.', '두 단어가 결합하는 경우이므로, 모음조화가 엄격하게 지켜졌다.', '두 형태소가 결합하는 경우이므로, 모음조화가 엄격하게 지켜졌다.', '이어적기가 사용되었다.', '연철이 사용되었다.'], answer: 0 },

    // ─── 12. 아·니 (뮈다 앞) ───
    { id: 'y12a', image: 'img/yongbi/w12.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['아니', '아니다', '안에', '아니고'], answer: 0 },

    // ─── 13. :뮐·ᄊᆡ ───
    { id: 'y13a', image: 'img/yongbi/w13.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['흔들리므로', '밀므로', '움직여서', '흔들려도'], answer: 0 },
    { id: 'y13b', image: 'img/yongbi/w13.png', src: 'short',
      prompt: '위 구절의 발음으로 알맞은 것은?',
      choices: ['뮐싸이', '뮐새', '밀싸이', '뮐쌔'], answer: 0 },
    { id: 'y13c', image: 'img/yongbi/w13.png', src: 'mc', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것은?',
      choices: ['각자병서가 사용되었다.', '원인이나 이유를 나타내는 대등적 연결어미가 사용되었다.', '피동의 의미를 갖는 단어가 사용되었다.', '어두자음군이 사용되었다.', '이중모음이 사용되었다.'], answer: 1 },

    // ─── 14. 곶 ───
    { id: 'y14a', image: 'img/yongbi/w14.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['꽃', '곳', '꼬치', '고지'], answer: 0 },
    { id: 'y14b', image: 'img/yongbi/w14.png', src: 'mc', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절한 것은?',
      choices: ['종성에 대한 규칙이 적용되었다.', '고유어의 된소리화가 일어났다.', '한자어의 된소리화가 일어났다.', '당시 문법 규칙의 예외가 나타난 단어이다.', '문법 규칙에 의해 조사의 표기가 생략되어야 했다.'], answer: 3 },

    // ─── 15. :됴코 ───
    { id: 'y15a', image: 'img/yongbi/w15.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['좋고', '죠코', '돕고', '좋다고'], answer: 0 },
    { id: 'y15b', image: 'img/yongbi/w15.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 단어에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 구개음화 현상이 일어나기 전임을 알 수 있다.\nㄴ. 거센소리화 현상이 일어나기 전임을 알 수 있다.\nㄷ. 표음주의 원리가 적용되었음을 알 수 있다.\nㄹ. 어법에 맞도록 표기하였음을 알 수 있다.\nㅁ. 발음과 관련된 규칙이 표기에도 반영되었음을 알 수 있다.',
      choices: ['ㄱ, ㄷ', 'ㄴ, ㄹ', 'ㄷ, ㅁ', 'ㄱ, ㄹ', 'ㄴ, ㅁ'], answer: 1 },

    // ─── 16. 여·름 ───
    { id: 'y16a', image: 'img/yongbi/w16.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['열매', '여름', '열림', '여럿'], answer: 0 },
    { id: 'y16b', image: 'img/yongbi/w16.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 명사화 접미사와 명사형 전성어미에 대한 설명으로 옳지 않은 것을 모두 고른 것은?\nㄱ. 현대국어와 중세국어에서 모두 명사화 접미사와 명사형 전성어미를 형태 상으로 구분하기가 어렵다.\nㄴ. 세종어제훈민정음의 '쑤메'와 용비어천가 2장의 '여름'에서는 같은 종류의 명사형 전성어미가 사용되었다.\nㄷ. 세종어제훈민정음의 '쑤메'와 용비어천가 2장의 '여름'에서는 같은 종류의 명사화 접미사가 사용되었다.\nㄹ. 중세국어에서는 '-(으)ㅁ'을 사용하여 명사형 전성어미를 표기하였다.\nㅁ. 중세국어에서는 '-(으)ㅁ'을 사용하여 명사화 접미사를 표기하였다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 17. 하ᄂᆞ·니 ───
    { id: 'y17a', image: 'img/yongbi/w17.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['많으니', '하니', '크니', '하늘이니'], answer: 0 },
    { id: 'y17b', image: 'img/yongbi/w17.png', src: 'short',
      prompt: "위 단어에 쓰인 '선어말어미'의 기능 상의 이름으로 알맞은 것은?",
      choices: ['현재시제 선어말어미', '과거시제 선어말어미', '미래시제 선어말어미', '주체높임 선어말어미'], answer: 0 },

    // ─── 18. :ᄉᆡ·미 ───
    { id: 'y18a', image: 'img/yongbi/w18.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['샘이', '새가', '세미가', '샘을'], answer: 0 },

    // ─── 19. 기·픈 ───
    { id: 'y19a', image: 'img/yongbi/w19.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['깊은', '깊게', '기쁜', '깊고'], answer: 0 },

    // ─── 20. ·므·른 ───
    { id: 'y20a', image: 'img/yongbi/w20.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['물은', '물론', '무른', '물을'], answer: 0 },

    // ─── 21. ·ᄀᆞᄆᆞ·래 ───
    { id: 'y21a', image: 'img/yongbi/w21.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['가뭄에', '가무라', '가뭄이', '감히'], answer: 0 },

    // ─── 22. 아·니 (긋다 앞) ───
    { id: 'y22a', image: 'img/yongbi/w22.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['아니', '안에', '아니고', '아니다'], answer: 0 },
    { id: 'y22b', image: 'img/yongbi/w22.png', src: 'short',
      prompt: '위 단어의 품사로 알맞은 것은?',
      choices: ['부사', '형용사', '관형사', '감탄사'], answer: 0 },

    // ─── 23. 그·츨·ᄊᆡ ───
    { id: 'y23a', image: 'img/yongbi/w23.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['그치므로', '그을리므로', '그쳐서', '끊었으므로'], answer: 0 },
    { id: 'y23b', image: 'img/yongbi/w23.png', src: 'short',
      prompt: '위 단어의 발음으로 알맞은 것은?',
      choices: ['그츨싸이', '그츨새', '그출싸이', '그치싸이'], answer: 0 },

    // ─── 24. ·내 ───
    { id: 'y24a', image: 'img/yongbi/w24.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['내가', '나의', '내를', '냇물이'], answer: 0 },
    { id: 'y24b', image: 'img/yongbi/w24.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 'ㅎ 종성 체언'에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. ㅎ 종성 체언이 단독으로 쓰일 때는 ㅎ이 표기 상으로 항상 생략된다.\nㄴ. ㅎ 종성 체언이 관형격 조사와 쓰일 때는 ㅎ이 표기 상으로 항상 생략된다.\nㄷ. ㅎ 종성 체언은 현대 국어에도 그 흔적이 남아 있는 경우가 있다.\nㄹ. ㅎ 종성 체언은 현대 국어에서 모음으로 시작하는 조사와 결합하면 연음되어 표기된다.\nㅁ. ㅎ 종성 체언은 ㄱ 덧붙임 체언과 같은 원리로 체언에 결합한다.",
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄹ', 'ㄷ, ㅁ', 'ㄹ, ㅁ'], answer: 1 },

    // ─── 25. 이·러 ───
    { id: 'y25a', image: 'img/yongbi/w25.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이루어져', '이렇게', '일어나', '이르러'], answer: 0 },

    // ─── 26. 바·ᄅᆞ·래 ───
    { id: 'y26a', image: 'img/yongbi/w26.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['바다에', '바닥에', '바람에', '발에'], answer: 0 },

    // ─── 27. ·가ᄂᆞ·니 ───
    { id: 'y27a', image: 'img/yongbi/w27.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['가니', '가늘게', '갔으니', '가느니만'], answer: 0 },
    { id: 'y27b', image: 'img/yongbi/w27.png', src: 'short',
      prompt: "위 단어에 쓰인 '선어말어미'의 기능 상의 이름으로 알맞은 것은?",
      choices: ['현재시제 선어말어미', '과거시제 선어말어미', '미래시제 선어말어미', '상대높임 선어말어미'], answer: 0 },

    // ─── 28. 千世(천세) ───
    { id: 'y28a', image: 'img/yongbi/w28.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['오래 전', '천 명', '세상에', '천세를'], answer: 0 },

    // ─── 29. 우·희 ───
    { id: 'y29a', image: 'img/yongbi/w29.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['위에', '우리에', '위를', '아래에'], answer: 0 },
    { id: 'y29b', image: 'img/yongbi/w29.png', src: 'short',
      prompt: '위 단어에 쓰인 조사의 구체적인 이름으로 알맞은 것은?',
      choices: ['부사격 조사', '관형격 조사', '주격 조사', '보조사'], answer: 0 },

    // ─── 30. 미·리 ───
    { id: 'y30a', image: 'img/yongbi/w30.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['미리', '밀리', '마루', '머리'], answer: 0 },

    // ─── 31. 定(뎡)ᄒᆞ·샨 ───
    { id: 'y31a', image: 'img/yongbi/w31.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['정하신', '정한', '정하시는', '정해질'], answer: 0 },

    // ─── 32. 漢水北(한수북)·에 ───
    { id: 'y32a', image: 'img/yongbi/w32.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['한수북에', '한수북이', '한강 남쪽에', '한수와 북에'], answer: 0 },

    // ─── 33. 累仁開國(누인개국)ᄒᆞ·샤 ───
    { id: 'y33a', image: 'img/yongbi/w33.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['누인개국하시어', '누인개국하니', '누인개국하려고', '누인개국하시면'], answer: 0 },

    // ─── 34. 卜年(복년)·이 ───
    { id: 'y34a', image: 'img/yongbi/w34.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['복년이', '복년은', '복년을', '복년의'], answer: 0 },

    // ─── 35. ·ᄀᆞᇰ ───
    { id: 'y35a', image: 'img/yongbi/w35.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['끝', '강', '감', '공'], answer: 0 },

    // ─── 36. :업스시·니 ───
    { id: 'y36a', image: 'img/yongbi/w36.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['없으시니', '없으니', '업으시니', '없앴으니'], answer: 0 },
    { id: 'y36b', image: 'img/yongbi/w36.png', src: 'short',
      prompt: '위 단어의 선어말 어미가 높이고자 하는 대상은?',
      choices: ['끝', '임금', '하늘', '자손'], answer: 0 },

    // ─── 37. 聖神(성신)·이 ───
    { id: 'y37a', image: 'img/yongbi/w37.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['성신이', '성신을', '성스러운 신하가', '성신의'], answer: 0 },

    // ─── 38. 니ᅀᆞ·샤·도 ───
    { id: 'y38a', image: 'img/yongbi/w38.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이으셔도', '이어서도', '이으시도록', '잇자마자'], answer: 0 },

    // ─── 39. 敬天勤民(경천근민)ᄒᆞ·샤·ᅀᅡ ───
    { id: 'y39a', image: 'img/yongbi/w39.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['경천근민하시어', '경천근민하시니', '경천근민하려고', '경천근민하시면'], answer: 0 },

    // ─── 40. ·더욱 ───
    { id: 'y40a', image: 'img/yongbi/w40.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['더욱', '더우기', '덕을', '더러'], answer: 0 },

    // ─── 41. 구드시·리·이·다 ───
    { id: 'y41a', image: 'img/yongbi/w41.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['굳으시겠습니다', '굳으십니다', '굳어졌습니다', '굳으시옵니까'], answer: 0 },
    { id: 'y41b', image: 'img/yongbi/w41.png', src: 'mc', timeLimit: 25,
      prompt: '위 구절에 사용된 어미에 대한 설명으로 적절하지 않은 것은?',
      choices: ['주어를 높이는 역할을 하는 어미가 사용되었다.', '청자를 높이는 역할을 하는 어미가 사용되었다.', '목적어나 부사어를 높이는 역할을 하는 어미가 사용되었다.', '시제를 나타내는 어미가 사용되었다.', '문장을 마무리하는 어미가 사용되었다.'], answer: 2 },
    { id: 'y41c', image: 'img/yongbi/w41.png', src: 'mc', timeLimit: 25,
      prompt: '중세국어의 상대높임선어말어미에 대한 설명으로 적절한 것은?',
      choices: ['현대국어와 마찬가지로, 조건에 따라 2가지 형태로 쓰였다.', '앞에 결합하는 어간에 따라 결합 가능한 상대높임선어말어미의 종류가 달라졌다.', '앞에 결합하는 어미에 따라 결합 가능한 상대높임선어말어미의 종류가 달라졌다.', '뒤에 결합하는 어미에 따라 결합 가능한 상대높임선어말어미의 종류가 달라졌다.', '의문문에서는 상대높임선어말어미를 사용하지 않았다.'], answer: 3 },

    // ─── 42. 님·금·하 ───
    { id: 'y42a', image: 'img/yongbi/w42.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['임금이시어', '임금에게', '임금이야', '임금 아래'], answer: 0 },
    { id: 'y42b', image: 'img/yongbi/w42.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 청자를 높이는 표현이 사용되었다.\nㄴ. 돈호법이 사용된 구절이라고 볼 수 있다.\nㄷ. 영탄법이 사용된 구절이라고 볼 수 있다.\nㄹ. 두음법칙이 적용된 구절이라고 볼 수 있다.\nㅁ. 구체적인 청자가 드러나는 구절이라고 볼 수 있다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 43. 아ᄅᆞ쇼·셔 ───
    { id: 'y43a', image: 'img/yongbi/w43.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['아소서', '아뢰소서', '알려주소서', '앉으소서'], answer: 0 },

    // ─── 44. 洛水(낙수)·예 ───
    { id: 'y44a', image: 'img/yongbi/w44.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['낙수에', '낙수가', '낙숫물로', '낙수를'], answer: 0 },

    // ─── 45. 山行(산행) ───
    { id: 'y45a', image: 'img/yongbi/w45.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['사냥', '등산', '산길', '산에'], answer: 0 },

    // ─── 46. ·가 이·셔 ───
    { id: 'y46a', image: 'img/yongbi/w46.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['가 있어', '가서', '가지고 있어', '갔었어'], answer: 0 },
    { id: 'y46b', image: 'img/yongbi/w46.png', src: 'short',
      prompt: '위 구절의 동작상으로 알맞은 것은?',
      choices: ['완료상', '진행상', '예정상', '반복상'], answer: 0 },

    // ─── 47. 하나·빌 ───
    { id: 'y47a', image: 'img/yongbi/w47.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['할아버지를', '할아버지가', '한 아비를', '하늘을'], answer: 0 },

    // ─── 48. 미·드니·잇·가 ───
    { id: 'y48a', image: 'img/yongbi/w48.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['믿습니까', '믿으니까', '믿었습니다', '미더워합니까'], answer: 0 },
    { id: 'y48b', image: 'img/yongbi/w48.png', src: 'hapdap', timeLimit: 25,
      prompt: "다음 중, 중세국어의 의문문에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 판정의문문은 '예/아니오'로 답할 수 있는 의문문의 형태를 의미한다.\nㄴ. 중세국어의 판정의문문은 '-ㅏ'의 형태로 종결되었다.\nㄷ. 설명의문문은 서술형 형태의 대답을 유도하는 의문문의 형태를 의미한다.\nㄹ. 중세국어의 설명의문문은 '-ㅗ'의 형태로 종결되었다.\nㅁ. 중세국어의 의문문은 모든 종류의 상대높임선어말어미와 결합할 수 있었다.",
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄷ, ㄹ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 }
  ]
};
