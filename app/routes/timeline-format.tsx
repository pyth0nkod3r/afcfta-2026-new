import { TimelineHero } from "../components/timeline/TimelineHero";
import { PreHackathonPhase } from "../components/timeline/PreHackathonPhase";
import { HackathonDaysPhase } from "../components/timeline/HackathonDaysPhase";
import { PostHackathonPhase } from "../components/timeline/PostHackathonPhase";
import { FullScheduleSnapshot } from "../components/timeline/FullScheduleSnapshot";
import { HybridFormatExplained } from "../components/timeline/HybridFormatExplained";
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
      <TimelineCallToAction />
    </>
  );
}
