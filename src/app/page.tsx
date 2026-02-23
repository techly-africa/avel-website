import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import ThreePillars from "@/components/home/ThreePillars";
import Outcomes from "@/components/home/Outcomes";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CaseStudiesTeaser from "@/components/home/CaseStudiesTeaser";
import HowWeEngage from "@/components/home/HowWeEngage";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProofStrip />
      <ThreePillars />
      <Outcomes />
      <ServicesPreview />
      <FeaturedProducts />
      <CaseStudiesTeaser />
      <HowWeEngage />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
