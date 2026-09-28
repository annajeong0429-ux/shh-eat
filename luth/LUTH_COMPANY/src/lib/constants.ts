import type { NavItem, QuickLink } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "회사 소개", href: "/inquiry#about" },
  { label: "시공 사례", href: "/portfolio" },
  { label: "주차장 상식", href: "/knowledge" },
  { label: "견적 문의", href: "/inquiry" },
];

export const QUICK_LINKS: QuickLink[] = [
  { label: "회사 소개", href: "/inquiry#about" },
  { label: "빌라·상가 시공사례", href: "/portfolio" },
  { label: "원격 견적문의", href: "/inquiry" },
  {
    label: "전화 상담",
    href: `tel:${process.env.NEXT_PUBLIC_PHONE_PRIMARY ?? "01087400440"}`,
    external: true,
  },
];

export const PORTFOLIO_FILTERS = [
  { id: "all", label: "전체" },
  { id: "villa-officetel", label: "빌라/오피스텔" },
  { id: "commercial-building", label: "상가/빌딩" },
  { id: "paid-unmanned", label: "주차 유료화/무인화" },
] as const;

export const KNOWLEDGE_FILTERS = [
  { id: "all", label: "전체" },
  { id: "maintenance-tips", label: "차단기 자가정비/팁" },
  { id: "regulations", label: "주차장 법규/설치 기준" },
] as const;
