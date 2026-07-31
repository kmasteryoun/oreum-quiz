// [오름] 복습 퀴즈 배틀 — 소학언해
// 원본: [오름] 고전문법 소학언해 복습시험 (2026 여름) 구글 폼
window.QUIZZES = window.QUIZZES || {};
window.QUIZZES.sohak = {
  id: 'sohak',
  title: '소학언해',
  timeLimit: 20,
  questions: [
    // ─── 1. 孔子(공자)ㅣ ───
    { id: 's01a', image: 'img/sohak/w01.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['공자가', '공자를', '공자는', '공자의'], answer: 0 },
    { id: 's01b', image: 'img/sohak/w01.png', src: 'mc', timeLimit: 25,
      prompt: '위 구절을 통해 알 수 있는 것으로 옳은 것은?',
      choices: ['15세기에서 16세기로 넘어오면서 주격 조사에 변화가 생겼다.', '15세기와 마찬가지로 현실 한자음 표기가 사용되었다.', '15세기와 마찬가지로 동국정운식 표기가 사용되었다.', "주격조사 '-가'가 아직 등장하지 않았다.", '옛이응이 소멸되었다.'], answer: 3 },

    // ─── 2. 曾子(증자)ᄃᆞ려 ───
    { id: 's02a', image: 'img/sohak/w02.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['증자에게', '증자가', '증자와', '증자를'], answer: 0 },
    { id: 's02b', image: 'img/sohak/w02.png', src: 'short',
      prompt: '이 구절에서 사용된 조사의 구체적인 이름으로 알맞은 것은?',
      choices: ['부사격 조사', '관형격 조사', '주격 조사', '접속 조사'], answer: 0 },

    // ─── 3. 닐·러 ───
    { id: 's03a', image: 'img/sohak/w03.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['일러', '늘려', '날라', '일어나'], answer: 0 },
    { id: 's03b', image: 'img/sohak/w03.png', src: 'hapdap', timeLimit: 25,
      prompt: '이 구절에 대한 설명으로 옳지 않은 것을 모두 고른 것은?\nㄱ. 두음법칙이 사용되었다.\nㄴ. 초성 ㅇ의 음가가 사라졌다.\nㄷ. 현대국어의 불규칙 활용에 영향을 미친다.\nㄹ. 15세기의 활용형과 같은 형태로 쓰였다.\nㅁ. 17세기의 활용형과 같은 형태로 쓰였다.',
      choices: ['ㄱ, ㄴ', 'ㄱ, ㄹ', 'ㄴ, ㄷ', 'ㄷ, ㄹ', 'ㄹ, ㅁ'], answer: 1 },

    // ─── 4. ᄀᆞᆯ·ᄋᆞ샤·ᄃᆡ ───
    { id: 's04a', image: 'img/sohak/w04.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['말하시되', '가르치시되', '말하시니', '갈라서되'], answer: 0 },
    { id: 's04b', image: 'img/sohak/w04.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['끊어', '이어', '붙여', '옮겨'], answer: 0 },
    { id: 's04c', image: 'img/sohak/w04.png', src: 'hapdap', timeLimit: 25,
      prompt: '16세기의 주체높임선어말어미에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 현대국어와 같은 형태인 주체높임선어말어미가 존재했다.\nㄴ. 이 구절에서 사용된 주체높임선어말어미는 어말어미가 모음으로 시작할 때 사용된다.\nㄷ. 이 구절에서 사용된 주체높임선어말어미는 어말어미가 자음으로 시작할 때 사용된다.\nㄹ. 이 구절에는 생략된 음운이 있다.\nㅁ. 15세기와 같은 형태의 주체높임선어말어미가 사용되었다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 5. ·몸·이며 ───
    { id: 's05a', image: 'img/sohak/w05.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['몸이며', '몸이면', '모미며', '몸에며'], answer: 0 },
    { id: 's05b', image: 'img/sohak/w05.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['끊어', '이어', '붙여', '옮겨'], answer: 0 },

    // ─── 6. 얼구·리며 → 얼굴이며 ───
    { id: 's06a', image: 'img/sohak/w06.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['얼굴이며', '얼굴이면', '얼구리며', '얼굴에며'], answer: 0 },
    { id: 's06b', image: 'img/sohak/w06.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['끊어', '이어', '붙여', '옮겨'], answer: 0 },
    { id: 's06c', image: 'img/sohak/w06.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 의미의 [    ]가 사용되었다.'",
      choices: ['축소', '확대', '이동', '교체'], answer: 0 },

    // ─── 7. 머리터럭·이며 ───
    { id: 's07a', image: 'img/sohak/w07.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['머리털이며', '머리떨림이며', '머리털만', '머리부터'], answer: 0 },
    { id: 's07b', image: 'img/sohak/w07.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['끊어', '이어', '붙여', '옮겨'], answer: 0 },

    // ─── 8. ·ᄉᆞᆯ·ᄒᆞᆫ ───
    { id: 's08a', image: 'img/sohak/w08.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['살은', '살이', '쌀은', '살을'], answer: 0 },
    { id: 's08b', image: 'img/sohak/w08.png', src: 'hapdap', timeLimit: 25,
      prompt: '이 구절을 통해서 알 수 있는 사실이 아닌 것을 모두 고른 것은?\nㄱ. 16세기에도 15세기와 같은 형태의 종성 체언이 존재했다.\nㄴ. ㅎ 종성체언은 15, 16세기에는 사용되었으나, 현대국어에서는 그 흔적이 남아있지 않다.\nㄷ. 16세기에도 15세기와 마찬가지로 모음조화가 존재했다.\nㄹ. 현대에도 모음조화가 엄격하게 지켜졌다.\nㅁ. 현대국어에는 표기되지 않는 음운이 있다.',
      choices: ['ㄱ, ㄷ', 'ㄴ, ㄹ', 'ㄷ, ㅁ', 'ㄴ, ㄷ', 'ㄹ, ㅁ'], answer: 1 },

    // ─── 9. 父母(부모)·ᄭᅴ ───
    { id: 's09a', image: 'img/sohak/w09.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['부모께', '부모의', '부모가', '부모께서'], answer: 0 },

    // ─── 10. 받ᄌᆞ·온 ───
    { id: 's10a', image: 'img/sohak/w10.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['받은', '받는', '받았던', '바친'], answer: 0 },
    { id: 's10b', image: 'img/sohak/w10.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['이어', '끊어', '붙여', '겹쳐'], answer: 0 },
    { id: 's10c', image: 'img/sohak/w10.png', src: 'hapdap', timeLimit: 25,
      prompt: '중세국어의 객체높임선어말어미에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 현대국어의 객체높임선어말어미와 동일한 형태인 객체높임선어말어미가 존재한다.\nㄴ. 중세국어의 객체높임선어말어미는 총 6가지의 형태로 존재한다.\nㄷ. 어간 말음이 ㅂ, ㄱ, ㅅ, ㅎ이면 뒤에 ㅅ으로 시작하는 객체높임선어말어미가 붙는다.\nㄹ. 어간 말음이 ㄷ, ㅌ, ㅈ, ㅊ이면 뒤에 ㅈ으로 시작하는 객체높임선어말어미가 붙는다.\nㅁ. 어말어미의 형태는 객체높임선어말어미의 분류 기준이 아니다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄹ, ㅁ', 'ㄴ, ㄹ, ㅁ'], answer: 1 },

    // ─── 11. 거·시니 ───
    { id: 's11a', image: 'img/sohak/w11.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['것이니', '거시기니', '것이냐', '계시니'], answer: 0 },
    { id: 's11b', image: 'img/sohak/w11.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['이어', '끊어', '붙여', '겹쳐'], answer: 0 },

    // ─── 12. 敢(감)·히 ───
    { id: 's12a', image: 'img/sohak/w12.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['감히', '감이', '강히', '굳이'], answer: 0 },

    // ─── 13. 헐·워 ───
    { id: 's13a', image: 'img/sohak/w13.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['헐워', '헐어', '헐도록', '헐리어'], answer: 0 },
    { id: 's13b', image: 'img/sohak/w13.png', src: 'short',
      prompt: '위 구절에서 쓰인 접사의 이름으로 알맞은 것은?',
      choices: ['사동접사', '피동접사', '명사화 접미사', '부사화 접미사'], answer: 0 },

    // ─── 14. ᄉᆞᆼ·ᄒᆡ·오·디 ───
    { id: 's14a', image: 'img/sohak/w14.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['상해 오지', '상하게 되지', '상해버리지', '상하고 오지'], answer: 0 },
    { id: 's14b', image: 'img/sohak/w14.png', src: 'short',
      prompt: '위 구절에서 쓰인 접사의 이름으로 알맞은 것은?',
      choices: ['사동접사', '피동접사', '명사화 접미사', '부사화 접미사'], answer: 0 },
    { id: 's14c', image: 'img/sohak/w14.png', src: 'short',
      prompt: '위 구절을 통해 알 수 있는, 16세기에는 쓰이지 않았으나 현대국어에서는 쓰이는 음운변동의 종류는?',
      choices: ['구개음화', '두음법칙', '원순모음화', '거센소리되기'], answer: 0 },

    // ─── 15. 아·니 ───
    { id: 's15a', image: 'img/sohak/w15.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['아니', '안에', '아직', '아니다'], answer: 0 },
    { id: 's15b', image: 'img/sohak/w15.png', src: 'short',
      prompt: '위 단어의 품사로 알맞은 것은?',
      choices: ['부사', '형용사', '감탄사', '관형사'], answer: 0 },

    // ─── 16. :홈·이 ───
    { id: 's16a', image: 'img/sohak/w16.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['함이', '홈이', '하며', '함을'], answer: 0 },
    { id: 's16b', image: 'img/sohak/w16.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 15세기와 같은 형태의 명사화 접미사가 사용되었다.\nㄴ. 현대국어와 같은 형태의 명사화 접미사가 사용되었다.\nㄷ. 15세기와 같은 형태의 명사형 전성어미가 사용되었다.\nㄹ. 현대국어와 같은 형태의 명사형 전성어미가 사용되었다.\nㅁ. 15세기와 표기가 일치한다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 17. 孝道(효도)·의 ───
    { id: 's17a', image: 'img/sohak/w17.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['효도의', '효도가', '효도에', '효도를'], answer: 0 },
    { id: 's17b', image: 'img/sohak/w17.png', src: 'short',
      prompt: '이 구절에서 사용된 조사의 이름으로 알맞은 것은?',
      choices: ['관형격 조사', '부사격 조사', '주격 조사', '보조사'], answer: 0 },

    // ─── 18. 비르·소미·오 ───
    { id: 's18a', image: 'img/sohak/w18.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['시작이고', '비로소이고', '시작하며', '비롯되어'], answer: 0 },
    { id: 's18b', image: 'img/sohak/w18.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['이어', '끊어', '붙여', '겹쳐'], answer: 0 },
    { id: 's18c', image: 'img/sohak/w18.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 15세기와 같은 형태의 명사화 접미사가 사용되었다.\nㄴ. 현대국어와 같은 형태의 명사화 접미사가 사용되었다.\nㄷ. 15세기와 같은 형태의 명사형 전성어미가 사용되었다.\nㄹ. 현대국어와 같은 형태의 명사형 전성어미가 사용되었다.\nㅁ. 15세기와 표기가 일치한다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 19. ·몸·을 ───
    { id: 's19a', image: 'img/sohak/w19.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['몸을', '몸은', '모믈', '몸이'], answer: 0 },
    { id: 's19b', image: 'img/sohak/w19.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 [    ]적기가 사용되었다.'",
      choices: ['끊어', '이어', '붙여', '옮겨'], answer: 0 },
    { id: 's19c', image: 'img/sohak/w19.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 15세기에 비해 16세기에 [    ]이/가 점차 지켜지지 않았음을 보여준다.'",
      choices: ['모음조화', '두음법칙', '구개음화', '어두자음군'], answer: 0 },

    // ─── 20. 셰·워 ───
    { id: 's20a', image: 'img/sohak/w20.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['세워', '새워', '세우고', '서서'], answer: 0 },
    { id: 's20b', image: 'img/sohak/w20.png', src: 'short',
      prompt: '위 구절에서 쓰인 접사의 이름으로 알맞은 것은?',
      choices: ['사동접사', '피동접사', '명사화 접미사', '높임 접사'], answer: 0 },

    // ─── 21. 道(도)·를 ───
    { id: 's21a', image: 'img/sohak/w21.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['도를', '도가', '도리를', '길에'], answer: 0 },

    // ─── 22. 行(행)·ᄒᆞ·야 ───
    { id: 's22a', image: 'img/sohak/w22.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['행하여', '행하니', '행하고서', '행하자'], answer: 0 },

    // ─── 23. 일·홈·을 ───
    { id: 's23a', image: 'img/sohak/w23.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['이름을', '일홈이', '이름이', '일함을'], answer: 0 },
    { id: 's23b', image: 'img/sohak/w23.png', src: 'short',
      prompt: "빈칸에 들어갈 말로 알맞은 것은?\n'이 구절은 15세기에 비해 16세기에 [    ]이/가 점차 지켜지지 않았음을 보여준다.'",
      choices: ['모음조화', '두음법칙', '구개음화', '어두자음군'], answer: 0 },

    // ─── 24. 後世(후세)·예 ───
    { id: 's24a', image: 'img/sohak/w24.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['후세에', '후세가', '후손에게', '훗날을'], answer: 0 },

    // ─── 25. :베퍼 ───
    { id: 's25a', image: 'img/sohak/w25.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['널리 알려', '베어서', '뻗어서', '버티어'], answer: 0 },
    { id: 's25b', image: 'img/sohak/w25.png', src: 'short',
      prompt: '위 구절에서 알 수 있는, 16세기에도 적용된 음운변동 현상은?',
      choices: ["'ㅡ' 탈락", '구개음화', '두음법칙', '원순모음화'], answer: 0 },

    // ─── 26. 父母(부모)·를 ───
    { id: 's26a', image: 'img/sohak/w26.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['부모를', '부모가', '부모의', '부모는'], answer: 0 },

    // ─── 27. 현·뎌케 ───
    { id: 's27a', image: 'img/sohak/w27.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['드러나게', '흐려지게', '현명하게', '단단하게'], answer: 0 },
    { id: 's27b', image: 'img/sohak/w27.png', src: 'short',
      prompt: '위 구절을 통해 알 수 있는, 16세기에는 쓰이지 않았으나 현대국어에서는 쓰이는 음운변동의 종류는?',
      choices: ['구개음화', '두음법칙', '원순모음화', '거센소리되기'], answer: 0 },

    // ─── 28. :홈·이 ───
    { id: 's28a', image: 'img/sohak/w28.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['함이', '함을', '홈이', '하며'], answer: 0 },
    { id: 's28b', image: 'img/sohak/w28.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 15세기와 같은 형태의 명사화 접미사가 사용되었다.\nㄴ. 현대국어와 같은 형태의 명사화 접미사가 사용되었다.\nㄷ. 15세기와 같은 형태의 명사형 전성어미가 사용되었다.\nㄹ. 현대국어와 같은 형태의 명사형 전성어미가 사용되었다.\nㅁ. 15세기와 표기가 일치한다.',
      choices: ['ㄱ, ㄴ, ㄷ', 'ㄴ, ㄷ, ㄹ', 'ㄱ, ㄴ, ㄹ, ㅁ', 'ㄴ, ㄷ, ㄹ, ㅁ', 'ㄱ, ㄷ, ㄹ, ㅁ'], answer: 2 },

    // ─── 29. 孝道(효도)·의 ───
    { id: 's29a', image: 'img/sohak/w29.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['효도의', '효도에', '효도가', '효도를'], answer: 0 },
    { id: 's29b', image: 'img/sohak/w29.png', src: 'hapdap', timeLimit: 25,
      prompt: '중세국어의 관형격 조사에 대한 설명으로 적절한 것을 모두 고른 것은?\nㄱ. 사람을 가리키는 말이 체언으로 올 때, 사용할 수 있는 관형격 조사는 두 가지이다.\nㄴ. 동물을 가리키는 말이 체언으로 올 때, 모음 조화에 따라 다른 관형격 조사가 온다.\nㄷ. 하나의 음운이 하나의 단어 역할을 하기도 한다.\nㄹ. 중세국어와 현대국어의 관형격 조사의 개수는 일치한다.\nㅁ. 중세국어와 현대국어의 관형격 조사의 개수 차는 하나이다.',
      choices: ['ㄱ, ㄴ', 'ㄴ, ㄷ', 'ㄷ, ㄹ', 'ㄱ, ㅁ', 'ㄹ, ㅁ'], answer: 1 },

    // ─── 30. ᄆᆞ·ᄎᆞᆷ·이니·라 ───
    { id: 's30a', image: 'img/sohak/w30.png', src: 'short',
      prompt: '위 단어의 현대어 풀이로 알맞은 것은?',
      choices: ['마침이다', '마치니라', '마침내이다', '맞음이니라'], answer: 0 },
    { id: 's30b', image: 'img/sohak/w30.png', src: 'hapdap', timeLimit: 25,
      prompt: '위 구절에 대한 설명으로 적절하지 않은 것을 모두 고른 것은?\nㄱ. 15세기와 같은 형태의 명사화 접미사가 사용되었다.\nㄴ. 현대국어와 같은 형태의 명사화 접미사가 사용되었다.\nㄷ. 15세기와 같은 형태의 명사형 전성어미가 사용되었다.\nㄹ. 현대국어와 같은 형태의 명사형 전성어미가 사용되었다.\nㅁ. 15세기와 표기가 일치한다.',
      choices: ['ㄱ, ㄴ', 'ㄴ, ㄷ, ㄹ', 'ㄷ, ㄹ, ㅁ', 'ㄱ, ㄴ, ㅁ', 'ㄱ, ㄷ, ㄹ'], answer: 2 }
  ]
};
