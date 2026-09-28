import { PillButton } from "@/components/ui/PillButton";
import { PageContainer } from "@/components/ui/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-semibold tracking-tight text-foreground">404</h1>
      <p className="mt-4 text-gray-text">요청하신 페이지를 찾을 수 없습니다.</p>
      <PillButton href="/" className="mt-8">
        홈으로 돌아가기
      </PillButton>
    </PageContainer>
  );
}
