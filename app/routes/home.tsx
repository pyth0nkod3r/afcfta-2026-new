import type { Route } from "./+types/home";
import { HomePage } from "~/components/landing-page/HomePage";

export const meta: Route.MetaFunction = () => [
  { title: "AfCFTA Hackathon 2026 — Accelerating Digital Trade" },
  {
    name: "description",
    content:
      "Join innovators across Africa at the AfCFTA Hackathon 2026 in Abuja and online. Build solutions that power intra-African digital trade.",
  },
];

export default function Home() {
  return <HomePage />;
}
