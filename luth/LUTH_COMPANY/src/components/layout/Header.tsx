import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { assetPath } from "@/lib/asset-path";
import { NAV_ITEMS } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-1.5 bg-foreground px-4 py-2 text-xs text-white md:hidden">
      <span>시공 및 견적문의</span>
      <a
        href={`tel:${siteConfig.phonePrimary.replace(/-/g, "")}`}
        className="font-semibold text-white"
      >
        {siteConfig.phonePrimary}
      </a>
    </div>
  );
}

export function Header() {
  return (
    <header className="hidden border-b border-gray-line md:block">
      <PageContainer className="flex items-center justify-between py-5">
        <Link href="/" className="tracking-[-0.02em]">
          <Image
            src={assetPath("/images/logo.png")}
            alt={siteConfig.name}
            width={630}
            height={270}
            priority
            className="h-auto w-[100px]"
          />
          <span className="mt-1.5 block text-[13px] font-normal text-gray-text">
            주차차단기 설치·공사 전문
          </span>
        </Link>
        <nav className="flex gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-foreground hover:text-gray-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </PageContainer>
    </header>
  );
}
