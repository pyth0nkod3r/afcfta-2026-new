import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { COMMON_LINKS } from "~/lib/constants";
import { HelpCircle, UserPlus, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function FAQCTA() {
  return (
    <Section
      className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 py-14 sm:py-18"
      container={false}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-2 font-semibold text-sm bg-white/50 text-blue-900 border border-white/60">
            <HelpCircle className="w-5 h-5" aria-hidden />
            Still Have Questions?
          </div>

          <Heading
            as="h2"
            level="h2"
            className="font-heading font-bold mb-2 text-black"
          >
            Can't Find What You're Looking For?
          </Heading>

          <Body
            size="default"
            className="max-w-2xl mb-5 text-black/80"
          >
            Browse all FAQs, register for the hackathon, or contact our support team for personalized assistance. We're here to help you succeed.
          </Body>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="default"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <a href={COMMON_LINKS.faq}>
                <FileText className="w-5 h-5" />
                View All FAQs
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 bg-white/60 border-black/20 text-black hover:bg-white/80"
            >
              <a href={COMMON_LINKS.register}>
                <UserPlus className="w-5 h-5" />
                Register Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
