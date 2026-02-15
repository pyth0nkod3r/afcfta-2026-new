import type { Route } from "./+types/media-resources";
import { MediaResourcesPage } from "~/components/media/MediaResourcesPage";

export const meta: Route.MetaFunction = () => [
  { title: "Media & Resources — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Access official logos, press releases, brand assets, and media resources for the AfCFTA Hackathon 2026.",
  },
];

export default function MediaResources() {
  return <MediaResourcesPage />;
}
