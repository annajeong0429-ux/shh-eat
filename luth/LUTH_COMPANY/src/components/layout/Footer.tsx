import { PageContainer } from "@/components/ui/PageContainer";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { businessInfo } = siteConfig;

  return (
    <footer className="border-t border-gray-line">
      <PageContainer className="flex justify-start py-7 pb-10 text-xs leading-relaxed text-gray-text md:justify-end">
        <div className="md:text-right">
          <p>
            {businessInfo.companyName}
            {businessInfo.representative && ` | 대표: ${businessInfo.representative}`}
            {businessInfo.businessNumber && ` | 사업자등록번호: ${businessInfo.businessNumber}`}
          </p>
          <p>
            {siteConfig.address} | {siteConfig.phonePrimary} / {siteConfig.phoneSecondary}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
