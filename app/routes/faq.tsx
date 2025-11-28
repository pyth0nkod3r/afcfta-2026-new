import type { Route } from "./+types/faq";
import { FAQHero } from "../components/faq/FAQHero";
import { FAQSection } from "../components/faq/FAQSection";
import { FAQCTA } from "../components/faq/FAQCTA";

export const meta: Route.MetaFunction = () => [
  { title: "Frequently Asked Questions — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Find answers to common questions about participation, challenge tracks, format, rewards, and technical requirements for the AfCFTA Hackathon 2026.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQHero />
      <FAQSection />
      <FAQCTA />
    </>
  );
}
