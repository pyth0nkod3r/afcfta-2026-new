import { WhyAfcftaHero } from "../components/why-afcfta/WhyAfcftaHero";
import { VisionSection } from "../components/why-afcfta/VisionSection";
import { ObjectivesSection } from "../components/why-afcfta/ObjectivesSection";
import { NigeriaLeadershipSection } from "../components/why-afcfta/NigeriaLeadershipSection";
import { HybridFormatSection } from "../components/why-afcfta/HybridFormatSection";
import { DigitalTradeProtocolSection } from "../components/why-afcfta/DigitalTradeProtocolSection";
import { ContinentalImpactSection } from "../components/why-afcfta/ContinentalImpactSection";
import { WhyAfcftaCallToAction } from "../components/why-afcfta/WhyAfcftaCallToAction";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <WhyAfcftaHero />

      {/* Why AfCFTA Section */}
      <section id="why-afcfta" className="scroll-mt-20">
        <VisionSection />
        <ObjectivesSection />
        <NigeriaLeadershipSection />
        <HybridFormatSection />
        <DigitalTradeProtocolSection />
        <ContinentalImpactSection />
      </section>

      <WhyAfcftaCallToAction />
    </>
  );
}
