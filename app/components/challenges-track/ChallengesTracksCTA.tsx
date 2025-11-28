import { CTASection } from "~/components/ui/cta-section";
import { COMMON_LINKS } from "~/lib/constants";
import { Rocket, Users } from "lucide-react";

export function ChallengesTracksCTA() {
  return (
    <CTASection
      badge={{
        text: "Ready to Build?",
        icon: Rocket,
      }}
      title="Register Now or Explore All Challenge Tracks"
      description="Join Africa's brightest innovators at the AfCFTA Hackathon 2026. Start your journey by registering your team, or dive deeper to find your perfect challenge."
      actions={[
        {
          label: "Register Your Team",
          href: COMMON_LINKS.register,
          variant: "primary",
          icon: Users,
        },
        {
          label: "See All Challenge Tracks",
          href: COMMON_LINKS.challengeTracks,
          variant: "outline",
          icon: Rocket,
        },
      ]}
      background="gradient"
    />
  );
}
