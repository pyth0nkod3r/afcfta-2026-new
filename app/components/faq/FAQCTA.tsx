import { CTASection } from "~/components/ui/cta-section";
import { COMMON_LINKS } from "~/lib/constants";
import { HelpCircle, UserPlus, FileText } from "lucide-react";

export function FAQCTA() {
  return (
    <CTASection
      badge={{
        text: "Still Have Questions?",
        icon: HelpCircle,
      }}
      title="Can't Find What You're Looking For?"
      description="Browse all FAQs, register for the hackathon, or contact our support team for personalized assistance. We're here to help you succeed."
      actions={[
        {
          label: "View All FAQs",
          href: COMMON_LINKS.faq,
          variant: "primary",
          icon: FileText,
        },
        {
          label: "Register Now",
          href: COMMON_LINKS.register,
          variant: "outline",
          icon: UserPlus,
        },
      ]}
      background="gradient"
    />
  );
}
