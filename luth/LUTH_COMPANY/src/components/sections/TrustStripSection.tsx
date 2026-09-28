import { PageContainer } from "@/components/ui/PageContainer";
import { siteConfig } from "@/lib/site-config";

const TRUST_ITEMS = [
  {
    title: "전국 직영 시공",
    description: siteConfig.serviceArea + " 대응",
  },
  {
    title: "무상 A/S 1년",
    description: "시공 후 확실한 사후관리",
  },
  {
    title: "특허 LPR 카메라",
    description: "고성능 차량번호인식 기술",
  },
  {
    title: "국내 생산 직거래",
    description: "하자 없는 맞춤 견적",
  },
];

export function TrustStripSection() {
  return (
    <PageContainer className="py-2">
      <div className="my-2 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] bg-gray-line md:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="bg-gray-card px-5 py-6">
            <b className="mb-1 block text-[15px] font-semibold text-foreground">
              {item.title}
            </b>
            <span className="text-[12.5px] leading-snug text-gray-text">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
