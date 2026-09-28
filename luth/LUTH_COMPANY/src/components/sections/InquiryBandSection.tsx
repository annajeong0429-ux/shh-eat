import { PillButton } from "@/components/ui/PillButton";
import { PageContainer } from "@/components/ui/PageContainer";

export function InquiryBandSection() {
  return (
    <PageContainer className="mb-16 mt-4">
      <section className="rounded-[24px] bg-gray-bg px-10 py-[52px] text-center">
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-foreground">
          간편 견적 문의
        </h2>
        <p className="mx-auto mt-2.5 max-w-lg text-base text-gray-text">
          연락처와 현장 정보를 남겨주시면 담당자가 빠르게 확인 후 연락드립니다.
        </p>
        <form className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
          <input
            type="text"
            placeholder="연락처를 입력해 주세요"
            className="w-[260px] rounded-[980px] border border-gray-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-text focus:border-foreground focus:outline-none"
            readOnly
          />
          <PillButton href="/inquiry">견적 요청하기</PillButton>
        </form>
      </section>
    </PageContainer>
  );
}
