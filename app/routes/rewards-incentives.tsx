import type { Route } from "./+types/rewards-incentives";
import { RewardsHero } from "../components/rewards/RewardsHero";
import { PrizeCategories } from "../components/rewards/PrizeCategories";
import { ThematicAwards } from "../components/rewards/ThematicAwards";
import { NonCashBenefits } from "../components/rewards/NonCashBenefits";
import { DeliveryFramework } from "../components/rewards/DeliveryFramework";
import { RewardsCallToAction } from "../components/rewards/RewardsCallToAction";

export const meta: Route.MetaFunction = () => [
  { title: "Rewards & Incentives — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Compete for over $500,000 in prizes and $2M+ in non-cash benefits. Discover the comprehensive rewards program for AfCFTA Hackathon 2026 participants.",
  },
];

export default function RewardsIncentives() {
  return (
    <>
      <RewardsHero />
      <PrizeCategories />
      <ThematicAwards />
      <NonCashBenefits />
      <DeliveryFramework />
      <RewardsCallToAction />
    </>
  );
}
