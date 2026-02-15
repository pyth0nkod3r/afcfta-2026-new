import { VenueHero } from "../components/venue/VenueHero";
import { VenueSection } from "../components/venue/VenueSection";
import { VirtualParticipation } from "../components/venue/VirtualParticipation";
import { WhyAbuja } from "../components/venue/WhyAbuja";
import { EventFormatBreakdown } from "../components/venue/EventFormatBreakdown";
import { AttendeeHighlights } from "../components/venue/AttendeeHighlights";
import { VenueCallToAction } from "../components/venue/VenueCallToAction";

export default function Venue() {
  return (
    <>
      <VenueHero />
      <VenueSection />
      <VirtualParticipation />
      <WhyAbuja />
      <EventFormatBreakdown />
      <AttendeeHighlights />
      <VenueCallToAction />
    </>
  );
}
