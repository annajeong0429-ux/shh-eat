import Image from "next/image";
import { QUICK_LINKS } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";
import { siteConfig } from "@/lib/site-config";
import { PageContainer } from "@/components/ui/PageContainer";
import { PillButton } from "@/components/ui/PillButton";

const [HEADLINE_FIRST, HEADLINE_SECOND] = siteConfig.catchphrase.split(", ");

export function HeroSection() {
  return (
    <PageContainer className="my-6">
      <section className="relative flex min-h-[520px] items-end overflow-hidden rounded-[24px] border border-gray-line">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0.92) 100%), linear-gradient(120deg, #EDEDED, #F7F7F7 70%)",
          }}
        />
        <div className="relative w-full px-6 pb-14 pt-24 text-foreground md:px-12 md:pt-28">
          <Image
            src={assetPath("/images/logo.png")}
            alt={siteConfig.name}
            width={630}
            height={270}
            priority
            className="mb-7 h-auto w-[140px] md:w-[168px]"
          />
          <span className="mb-3.5 block text-sm font-semibold text-gray-text">
            전국 직영 시공 · 무상 A/S 1년
          </span>
          <h1 className="max-w-[600px] text-[42px] font-semibold leading-[1.18] tracking-[-0.02em] max-md:text-[32px]">
            {HEADLINE_FIRST},
            <br />
            {HEADLINE_SECOND}
          </h1>
          <p className="mt-4 max-w-[480px] text-[17px] leading-normal text-gray-text">
            특허받은 차량번호인식 카메라와 국내 생산 제품으로, 시공부터 A/S까지
            확실하게 보장하는 주차차단기 전문 업체입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {QUICK_LINKS.map((link, index) => (
              <PillButton
                key={link.label}
                href={link.href}
                variant={index === 0 ? "primary" : "outline"}
                external={link.external}
              >
                {link.label}
              </PillButton>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
