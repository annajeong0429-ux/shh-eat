import type { Metadata } from "next";
import { PostCard } from "@/components/ui/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";
import { getPostsByCategory } from "@/data/posts";
import { PORTFOLIO_FILTERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "시공 사례",
  description:
    "빌라/오피스텔, 상가/빌딩, 주차 유료화·무인화 등 루쓰컴퍼니의 주차차단기 시공 사례를 확인하세요.",
};

export default function PortfolioPage() {
  const posts = getPostsByCategory("portfolio");

  return (
    <PageContainer className="py-16">
      <SectionHeading
        title="시공 사례"
        description="현장별 시공 전후 사진, 작동 영상, 설치 후기를 유형별로 정리했습니다."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {PORTFOLIO_FILTERS.map((filter) => (
          <span
            key={filter.id}
            className="rounded-[980px] border border-gray-line bg-white px-4 py-2 text-xs text-gray-text"
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-[18px] md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </PageContainer>
  );
}
