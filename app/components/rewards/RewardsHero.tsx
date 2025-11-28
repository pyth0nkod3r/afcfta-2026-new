import { PageHero } from "~/components/ui/page-hero";
import { COMMON_LINKS, PRIZE_INFO } from "~/lib/constants";
import { Trophy, DollarSign, Gift } from "lucide-react";

export function RewardsHero() {
  return (
    <PageHero
      id="rewards-hero"
      badge={{
        text: "Prizes & Recognition",
        icon: Trophy,
      }}
      title="Rewards & Incentives"
      description={`Compete for over ${PRIZE_INFO.totalPrizePool} in prizes, grants, and opportunities. Beyond monetary rewards, winners gain access to mentorship, investment opportunities, and a platform to scale across Africa.`}
      stats={[
        {
          icon: DollarSign,
          value: PRIZE_INFO.totalPrizePool,
          label: "Total Prize Pool",
        },
        {
          icon: Trophy,
          value: PRIZE_INFO.awardCategories,
          label: "Award Categories",
        },
        {
          icon: Gift,
          value: PRIZE_INFO.nonCashBenefits,
          label: "Non-Cash Benefits",
        },
      ]}
      actions={[
        {
          label: "View Prize Categories",
          href: "#prize-categories",
          variant: "primary",
        },
        {
          label: "Register to Compete",
          href: COMMON_LINKS.register,
          variant: "outline",
        },
      ]}
    />
  );
}
