export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "루쓰컴퍼니",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "주차차단기(LPR 차량번호인식기) 설치·공사·유지보수 전문 업체. 전국 직영 시공, 1년 무상 A/S, 특허 차량번호인식 기술.",
  catchphrase: "확실한 차량 통제의 시작, 간편한 주차시스템을 제안합니다.",
  subCatchphrase: "시공부터 무상 A/S까지 확실하게 보장하는 주차차단기 업체",
  phonePrimary: process.env.NEXT_PUBLIC_PHONE_PRIMARY ?? "010-8740-0440",
  phoneSecondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY ?? "010-7470-4682",
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "",
  address: "충북 음성군 일생로 389 1층",
  serviceArea: "서울·수도권 / 전국·제주",
  businessInfo: {
    companyName: "루쓰컴퍼니",
    representative: "",
    businessNumber: "",
    mailOrderNumber: "",
  },
  seo: {
    keywords: [
      "주차차단기",
      "차량번호인식기",
      "LPR",
      "주차시스템",
      "주차장 설치",
      "루쓰컴퍼니",
    ],
  },
} as const;
