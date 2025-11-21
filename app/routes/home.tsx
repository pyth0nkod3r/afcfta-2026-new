import type { Route } from "./+types/home";
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

export const meta: Route.MetaFunction = () => [
  { title: "AfCFTA Hackathon 2026 — Accelerating Digital Trade" },
  {
    name: "description",
    content:
      "Join innovators across Africa at the AfCFTA Hackathon 2026 in Abuja and online. Build solutions that power intra-African digital trade.",
  },
];

export default function Home() {
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
