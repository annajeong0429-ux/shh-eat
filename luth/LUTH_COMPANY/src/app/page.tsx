import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStripSection } from "@/components/sections/TrustStripSection";
import {
  KnowledgePreviewSection,
  PortfolioPreviewSection,
} from "@/components/sections/ContentPreviewSections";
import { InquiryBandSection } from "@/components/sections/InquiryBandSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <PortfolioPreviewSection />
      <KnowledgePreviewSection />
      <InquiryBandSection />
    </>
  );
}
