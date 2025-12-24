import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <ReferencesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
