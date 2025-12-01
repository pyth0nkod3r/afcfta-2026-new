import { TimelineHero } from "../components/timeline/TimelineHero";
import { PreHackathonPhase } from "../components/timeline/PreHackathonPhase";
import { HackathonDaysPhase } from "../components/timeline/HackathonDaysPhase";
import { PostHackathonPhase } from "../components/timeline/PostHackathonPhase";
import { FullScheduleSnapshot } from "../components/timeline/FullScheduleSnapshot";
import { HybridFormatExplained } from "../components/timeline/HybridFormatExplained";
import { VenueSection } from "../components/venue/VenueSection";
import { VirtualParticipation } from "../components/venue/VirtualParticipation";
import { WhyAbuja } from "../components/venue/WhyAbuja";
import { EventFormatBreakdown } from "../components/venue/EventFormatBreakdown";
import { AttendeeHighlights } from "../components/venue/AttendeeHighlights";
import { TimelineCallToAction } from "../components/timeline/TimelineCallToAction";

export default function TimelineFormat() {
  return (
    <>
      <TimelineHero />
      <PreHackathonPhase />
      <HackathonDaysPhase />
      <PostHackathonPhase />
      <FullScheduleSnapshot />
      <HybridFormatExplained />
      <VenueSection />
      <VirtualParticipation />
      <WhyAbuja />
      <EventFormatBreakdown />
      <AttendeeHighlights />
      <TimelineCallToAction />
    </>
  );
}
