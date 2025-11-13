import type { Route } from "./+types/home";
import { HeroSection } from "~/components/hero-section";
import { AboutSection } from "~/components/about-section";
import { PillarsSection } from "~/components/pillars-section";

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

      {/* Attach subsequent sections here once their tasks are ready */}
    </>
  );
}
