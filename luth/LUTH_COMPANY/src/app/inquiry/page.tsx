import type { Metadata } from "next";
import { PillButton } from "@/components/ui/PillButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "상담 및 문의",
  description: "주차차단기 견적 문의, 공지사항, 회사 소개 및 연락처 안내 페이지입니다.",
};

export default function InquiryPage() {
  return (
    <PageContainer className="py-16">
      <SectionHeading
        title="상담 및 문의"
        description="견적 가이드라인과 공지를 확인하고, 빠르게 문의해 주세요."
      />

      <section id="about" className="mt-16 scroll-mt-24">
        <h3 className="mb-4 text-xl font-semibold text-foreground">회사 소개</h3>
        <div className="rounded-[18px] border border-gray-line bg-gray-card p-8 text-sm leading-relaxed text-gray-text">
          <p className="mb-4">{siteConfig.description}</p>
          <ul className="space-y-2 text-foreground">
            <li>전국 직영 시공 및 1년 무상 A/S</li>
            <li>특허받은 고성능 차량번호인식 카메라</li>
            <li>국내 생산 제품 직거래 · 맞춤 견적</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-foreground">간편 견적 문의</h3>
        <form className="mx-auto max-w-xl space-y-4 rounded-[18px] border border-gray-line bg-gray-bg p-8">
          <input
            type="text"
            placeholder="이름"
            className="w-full rounded-[980px] border border-gray-line bg-white px-6 py-3 text-sm text-foreground placeholder:text-gray-text focus:border-foreground focus:outline-none"
          />
          <input
            type="tel"
            placeholder="연락처"
            className="w-full rounded-[980px] border border-gray-line bg-white px-6 py-3 text-sm text-foreground placeholder:text-gray-text focus:border-foreground focus:outline-none"
          />
          <textarea
            placeholder="현장 정보 및 문의 내용"
            rows={4}
            className="w-full rounded-[18px] border border-gray-line bg-white px-6 py-4 text-sm text-foreground placeholder:text-gray-text focus:border-foreground focus:outline-none"
          />
          <PillButton type="submit" className="w-full">
            견적 문의 보내기
          </PillButton>
        </form>
      </section>

      <section className="mt-16">
        <h3 className="mb-4 text-xl font-semibold text-foreground">공지사항</h3>
        <div className="rounded-[18px] border border-gray-line bg-gray-card p-6 text-sm text-gray-text">
          등록된 공지사항이 없습니다.
        </div>
      </section>

      <section className="mt-16 flex flex-wrap gap-4">
        <PillButton
          href={`tel:${siteConfig.phonePrimary.replace(/-/g, "")}`}
          external
        >
          전화 상담 ({siteConfig.phonePrimary})
        </PillButton>
        {siteConfig.kakaoChannelUrl && (
          <PillButton href={siteConfig.kakaoChannelUrl} variant="outline" external>
            카카오톡 상담
          </PillButton>
        )}
      </section>
    </PageContainer>
  );
}
