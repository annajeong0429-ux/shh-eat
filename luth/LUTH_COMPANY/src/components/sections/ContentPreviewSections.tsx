import Link from "next/link";
import { PostCard } from "@/components/ui/PostCard";
import { KnowledgeRow } from "@/components/ui/KnowledgeRow";
import { PageContainer } from "@/components/ui/PageContainer";
import { getPostsByCategory } from "@/data/posts";

export function PortfolioPreviewSection() {
  const portfolioPosts = getPostsByCategory("portfolio").slice(0, 3);

  return (
    <section className="py-16">
      <PageContainer>
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-foreground">
            시공 사례
          </h2>
          <Link href="/portfolio" className="text-sm text-foreground underline">
            전체 사례 보기 ›
          </Link>
        </div>
        <div className="grid gap-[18px] md:grid-cols-3">
          {portfolioPosts.map((post) => (
            <PostCard key={post.id} post={post} href="/portfolio" />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function KnowledgePreviewSection() {
  const knowledgePosts = getPostsByCategory("knowledge");

  return (
    <section className="py-16">
      <PageContainer>
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-foreground">
            주차장 상식
          </h2>
          <span className="text-sm text-gray-text">검색 유입 · 정보성 콘텐츠</span>
        </div>
        <div>
          {knowledgePosts.map((post) => (
            <KnowledgeRow key={post.id} post={post} href="/knowledge" />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
