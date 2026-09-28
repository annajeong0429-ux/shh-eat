import type { Metadata } from "next";
import { KnowledgeRow } from "@/components/ui/KnowledgeRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";
import { getPostsByCategory } from "@/data/posts";
import { KNOWLEDGE_FILTERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "주차장 상식",
  description:
    "차단기 자가정비 팁, 주차장 법규 및 설치 기준 등 유용한 정보성 콘텐츠를 제공합니다.",
};

export default function KnowledgePage() {
  const posts = getPostsByCategory("knowledge");

  return (
    <PageContainer className="py-16">
      <SectionHeading
        title="주차장 상식"
        description="검색 유입을 위한 정보성 콘텐츠로 잠재 고객에게 도움이 되는 정보를 제공합니다."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {KNOWLEDGE_FILTERS.map((filter) => (
          <span
            key={filter.id}
            className="rounded-[980px] border border-gray-line bg-white px-4 py-2 text-xs text-gray-text"
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="mt-12">
        {posts.map((post) => (
          <KnowledgeRow key={post.id} post={post} />
        ))}
      </div>
    </PageContainer>
  );
}
