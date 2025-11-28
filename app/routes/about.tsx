import { PageHero } from "../components/ui/page-hero";
import { VisionSection } from "../components/why-afcfta/VisionSection";
import { ObjectivesSection } from "../components/why-afcfta/ObjectivesSection";
import { NigeriaLeadershipSection } from "../components/why-afcfta/NigeriaLeadershipSection";
import { HybridFormatSection } from "../components/why-afcfta/HybridFormatSection";
import { DigitalTradeProtocolSection } from "../components/why-afcfta/DigitalTradeProtocolSection";
import { ContinentalImpactSection } from "../components/why-afcfta/ContinentalImpactSection";

import { VenueSection } from "../components/venue/VenueSection";
import { VirtualParticipation } from "../components/venue/VirtualParticipation";
import { WhyAbuja } from "../components/venue/WhyAbuja";
import { EventFormatBreakdown } from "../components/venue/EventFormatBreakdown";
import { AttendeeHighlights } from "../components/venue/AttendeeHighlights";

import { WhyAfcftaCallToAction } from "../components/why-afcfta/WhyAfcftaCallToAction";

export default function About() {
  return (
    <>
      <PageHero
        title="About AfCFTA Hackathon"
        subtitle="Discover the vision and venue for Africa's premier trade innovation event"
        description="Learn about our mission to accelerate digital trade across Africa, explore the event details, and understand how this hackathon will shape the future of continental commerce."
      />

      {/* Why AfCFTA Section */}
      <section id="why-afcfta" className="scroll-mt-20">
        <VisionSection />
        <ObjectivesSection />
        <NigeriaLeadershipSection />
        <HybridFormatSection />
        <DigitalTradeProtocolSection />
        <ContinentalImpactSection />
      </section>

      {/* Venue Section */}
      <section id="venue" className="scroll-mt-20">
        <VenueSection />
        <VirtualParticipation />
        <WhyAbuja />
        <EventFormatBreakdown />
        <AttendeeHighlights />
      </section>

      <WhyAfcftaCallToAction />
    </>
  );
}
