import { PageHero } from "~/components/ui/page-hero";
import { COMMON_LINKS, ASSETS } from "~/lib/constants";
import { Target } from "lucide-react";

export function ChallengesTracksHero() {
  return (
    <PageHero
      id="challenge-tracks-hero"
      badge={{
        text: "Challenge Tracks",
        icon: Target,
      }}
      title="Build Solutions that Power Africa's Borderless Digital Economy"
      description="The AfCFTA Hackathon 2026 invites Africa's brightest innovators to co-create solutions that accelerate the implementation of the AfCFTA Digital Trade Protocol — advancing inclusive, technology-driven trade across the continent."
      actions={[
        {
          label: "Submit Your Idea",
          href: COMMON_LINKS.register,
          variant: "primary",
        },
        {
          label: "Download Track Guide",
          href: ASSETS.trackGuide,
          variant: "outline",
        },
      ]}
    />
  );
}
