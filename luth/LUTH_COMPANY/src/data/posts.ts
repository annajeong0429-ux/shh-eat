import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "1",
    slug: "villa-barrier-installation",
    title: "빌라 주차장 차량번호인식 차단기 설치 사례",
    excerpt: "좁은 진입로 환경에서도 정확한 번호판 인식이 가능한 LPR 시스템 시공 후기입니다.",
    category: "portfolio",
    subcategory: "villa-officetel",
    categoryLabel: "빌라/오피스텔",
    publishedAt: "2026-07-01",
  },
  {
    id: "2",
    slug: "commercial-building-barrier",
    title: "상가 빌딩 무인 주차 정산 시스템 구축",
    excerpt: "출차권 정산기와 차단기를 연동한 상가 주차장 유료화 프로젝트입니다.",
    category: "portfolio",
    subcategory: "commercial-building",
    categoryLabel: "상가/빌딩",
    publishedAt: "2026-06-15",
  },
  {
    id: "3",
    slug: "unmanned-parking-system",
    title: "주차장 무인화 전환 시공 사례",
    excerpt: "24시간 무인 운영이 가능한 주차 유료화 시스템 도입 사례를 소개합니다.",
    category: "portfolio",
    subcategory: "paid-unmanned",
    categoryLabel: "주차 유료화/무인화",
    publishedAt: "2026-05-20",
  },
  {
    id: "4",
    slug: "barrier-maintenance-tips",
    title: "주차차단기 자가 점검 5가지 팁",
    excerpt: "일상적으로 확인하면 고장을 예방할 수 있는 차단기 유지보수 방법을 정리했습니다.",
    category: "knowledge",
    subcategory: "maintenance-tips",
    categoryLabel: "자가정비/팁",
    publishedAt: "2026-06-01",
  },
  {
    id: "5",
    slug: "parking-regulations-guide",
    title: "주차장 설치 관련 법규 기본 가이드",
    excerpt: "건물주가 알아두어야 할 주차장 설치 기준과 관련 법규를 쉽게 설명합니다.",
    category: "knowledge",
    subcategory: "regulations",
    categoryLabel: "법규/설치 기준",
    publishedAt: "2026-05-10",
  },
];

export function getPostsByCategory(category: Post["category"]) {
  return posts.filter((post) => post.category === category);
}

export function getFeaturedPosts(limit = 3) {
  return posts.slice(0, limit);
}
