import { PageHero } from "~/components/ui/page-hero";
import { COMMON_LINKS, CONTACT_INFO } from "~/lib/constants";
import { HelpCircle } from "lucide-react";

export function FAQHero() {
  return (
    <PageHero
      id="faq-hero"
      badge={{
        text: "Frequently Asked Questions",
        icon: HelpCircle,
      }}
      title="Everything You Need to Know About AfCFTA Hackathon 2026"
      description="Find answers to common questions about participation, challenge tracks, format, rewards, and technical requirements. Can't find what you're looking for? Contact our support team."
      actions={[
        {
          label: "Register Now",
          href: COMMON_LINKS.register,
          variant: "primary",
        },
        {
          label: "Contact Support",
          href: `mailto:${CONTACT_INFO.supportEmail}`,
          variant: "outline",
        },
      ]}
    />
  );
}
