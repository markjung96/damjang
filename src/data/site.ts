export const siteConfig = {
  name: "담장 클라이밍",
  nameEn: "DAMJANG CLIMBING",
  slogan: "당신의 클라이밍 스토리를 쌓아보세요",
  description: "을지로의 감성과 멋을 담은 클라이밍 짐, 담장에서 새로운 도전을 시작하세요.",
  keywords: ["담장", "클라이밍", "볼더링", "을지로", "신촌", "실내 클라이밍"],
} as const;

export const locations = [
  {
    id: "euljiro",
    name: "을지로점",
    nameEn: "Euljiro",
    address: "서울시 중구 남대문로 125 B1",
    phone: "02-318-3094",
    instagram: "https://www.instagram.com/euljiro_damjang/",
    kakao: "https://pf.kakao.com/_dmVyb",
    naver: "https://naver.me/GI3Jij4T",
    hours: {
      weekday: "11:00 - 23:00",
      saturday: "10:00 - 19:00",
      sunday: "10:00 - 20:00",
    },
    description:
      "을지로의 감성과 멋을 담은 공간. 다이나믹한 볼더링 문제와 카페 같은 분위기가 특징입니다.",
    features: ["다이나믹 볼더링", "카페 분위기", "넓은 공간", "초보자 환영"],
    mapQuery: "서울시 중구 남대문로 125",
  },
  {
    id: "sinchon",
    name: "신촌점",
    nameEn: "Sinchon",
    address: "서울 서대문구 신촌역로 10 5층",
    phone: "02-313-1003",
    instagram: "https://www.instagram.com/sinchon_damjang/",
    kakao: "https://pf.kakao.com/_dmVyb",
    naver: "https://naver.me/GI3Jij4T",
    hours: {
      weekday: "11:00 - 23:00",
      saturday: "10:00 - 19:00",
      sunday: "10:00 - 20:00",
    },
    description:
      "신촌역 도보 3분 거리의 접근성 좋은 볼더링 짐. 다양한 난이도의 문제를 즐길 수 있습니다.",
    features: ["역세권 위치", "다양한 난이도", "정기 세팅", "트레이닝 프로그램"],
    mapQuery: "서울 서대문구 신촌역로 10",
  },
] as const;

export const pricing = {
  daily: [
    { name: "일일 이용", price: "20,000원", description: "하루 자유 이용" },
    {
      name: "원데이 클래스",
      price: "30,000원",
      description: "강습 + 장비 대여 포함",
    },
  ],
  membership: [
    { name: "1개월", price: "150,000원", description: "월 정기 이용권" },
    {
      name: "3개월",
      price: "390,000원",
      description: "3개월 이용권 (월 130,000원)",
    },
    {
      name: "6개월",
      price: "690,000원",
      description: "6개월 이용권 (월 115,000원)",
    },
  ],
  rental: [
    { name: "암벽화 대여", price: "3,000원" },
    { name: "초크백 대여", price: "1,000원" },
  ],
} as const;

export const programs = [
  {
    id: "oneday",
    title: "원데이 체험",
    subtitle: "처음이라도 괜찮아요",
    description:
      "클라이밍이 처음인 분들을 위한 체험 프로그램. 기본 안전 교육부터 쉬운 문제 도전까지, 전문 강사가 1:1로 안내합니다.",
    duration: "약 2시간",
    includes: ["기본 안전 교육", "장비 대여", "기초 테크닉 강습", "자유 클라이밍"],
    icon: "mountain",
  },
  {
    id: "beginner",
    title: "초급 정기반",
    subtitle: "탄탄한 기초를 쌓다",
    description:
      "볼더링의 기본기를 체계적으로 배우는 과정. 풋워크, 밸런스, 기본 무브를 익힙니다.",
    duration: "주 2회 / 4주",
    includes: ["풋워크 트레이닝", "기본 무브 학습", "밸런스 훈련", "문제 해석 기초"],
    icon: "book-open",
  },
  {
    id: "intermediate",
    title: "중급 트레이닝",
    subtitle: "한 단계 더 높이",
    description:
      "기본기를 갖춘 클라이머를 위한 중급 과정. 다이나믹 무브, 오버행 테크닉, 루트 리딩을 심화합니다.",
    duration: "주 2회 / 4주",
    includes: [
      "다이나믹 무브",
      "오버행 테크닉",
      "루트 리딩",
      "체력 및 지구력 훈련",
    ],
    icon: "dumbbell",
  },
  {
    id: "advanced",
    title: "상급 클리닉",
    subtitle: "벽을 넘어서",
    description:
      "고난이도 문제에 도전하는 상급 클라이머를 위한 클리닉. 개인별 맞춤 피드백과 약점 보완 훈련을 제공합니다.",
    duration: "주 2회 / 4주",
    includes: ["개인별 약점 분석", "고급 테크닉", "멘탈 트레이닝", "대회 준비"],
    icon: "trophy",
  },
] as const;

export const notices = [
  {
    id: 1,
    title: "3월 정기 세팅 안내",
    date: "2026-03-10",
    content:
      "3월 15일(토) 을지로점, 3월 16일(일) 신촌점 정기 세팅이 진행됩니다. 세팅 당일은 오후 2시부터 이용 가능합니다.",
    important: true,
  },
  {
    id: 2,
    title: "봄맞이 원데이 클래스 이벤트",
    date: "2026-03-05",
    content:
      "3월 한 달간 원데이 클래스를 친구와 함께 신청하시면 10% 할인! 네이버 예약을 통해 신청해주세요.",
    important: true,
  },
  {
    id: 3,
    title: "신촌점 영업시간 변경 안내",
    date: "2026-02-28",
    content:
      "3월부터 신촌점 평일 영업시간이 11:00 - 23:00으로 변경됩니다. 참고 부탁드립니다.",
    important: false,
  },
  {
    id: 4,
    title: "설 연휴 휴무 안내",
    date: "2026-02-15",
    content:
      "설 연휴 기간(2/27~3/1) 양 지점 모두 휴무합니다. 즐거운 명절 보내세요!",
    important: false,
  },
  {
    id: 5,
    title: "을지로점 새 문제 오픈",
    date: "2026-02-10",
    content:
      "을지로점에 새로운 문제 30개가 세팅되었습니다. V0부터 V7까지 다양한 난이도로 준비했으니 많은 도전 부탁드립니다!",
    important: false,
  },
] as const;

export const navigation = [
  { name: "소개", href: "/about" },
  { name: "지점 안내", href: "/locations" },
  { name: "이용 안내", href: "/pricing" },
  { name: "프로그램", href: "/programs" },
  { name: "갤러리", href: "/gallery" },
  { name: "공지사항", href: "/notice" },
] as const;
