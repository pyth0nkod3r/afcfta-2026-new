import { HeroSection } from "~/components/landing-page/hero-section";
import { AboutSection } from "~/components/landing-page/about-section";
import { PillarsSection } from "~/components/landing-page/pillars-section";
import { TimelinePreviewSection } from "~/components/landing-page/timeline-preview-section";
import { RewardsPreviewSection } from "~/components/landing-page/rewards-preview-section";
import { ChallengeTracksPreviewSection } from "~/components/landing-page/challenge-tracks-section";
import { WhitepaperLaunchSection } from "~/components/landing-page/whitepaper-launch-section";
import { PartnershipPreviewSection } from "~/components/landing-page/partnership-preview-section";
import { MediaCommunitySection } from "~/components/landing-page/media-community-section";
import { RegistrationSection } from "~/components/landing-page/registration-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <TimelinePreviewSection />
      <RewardsPreviewSection />
      <ChallengeTracksPreviewSection />
      <WhitepaperLaunchSection />
      <PartnershipPreviewSection />
      <MediaCommunitySection />
      <RegistrationSection />
      {/* Attach subsequent sections here once their tasks are ready */}
    </>
  );
}
