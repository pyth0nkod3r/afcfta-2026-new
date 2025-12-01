import { PageHero } from "~/components/ui/page-hero";
import { COMMON_LINKS } from "~/lib/constants";
import { Trophy, Globe, Target } from "lucide-react";

export function RewardsHero() {
  return (
    <PageHero
      id="rewards-hero"
      badge={{
        text: "Celebrating Innovation, Impact, and Inclusion",
        icon: Trophy,
      }}
      title="Rewarding Ideas that Shape Africa's Digital Trade Future"
      description="The AfCFTA Hackathon 2026 goes beyond cash prizes — it's about enabling lasting impact. Outstanding teams will receive monetary rewards, thematic recognitions, incubation support, and integration opportunities with AfCFTA digital systems and national trade frameworks."
      stats={[
        {
          icon: Trophy,
          value: "₦60 Million",
          label: "Total Prize Pool",
        },
        {
          icon: Globe,
          value: "Continental Recognition",
          label: "Across AfCFTA, ECOWAS, and Partner Institutions",
        },
        {
          icon: Target,
          value: "Impact Focus",
          label: "Turning prototypes into deployable trade solutions",
        },
      ]}
      actions={[
        {
          label: "Apply to Compete",
          href: COMMON_LINKS.register,
          variant: "primary",
        },
        {
          label: "View Prize Categories",
          href: "#prize-categories",
          variant: "outline",
        },
      ]}
    />
  );
}
