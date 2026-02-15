import type { Route } from "./+types/_index";
import { HomePage } from "~/components/landing-page/HomePage";


export const meta: Route.MetaFunction = () => {
  return [
    { title: "AfCFTA Hackathon 2026" },
    {
      name: "description",
      content: "Join the AfCFTA Hackathon 2026 and transform African trade.",
    },
  ];
};

export default function Index() {
  return <HomePage />;
}

