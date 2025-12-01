import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { FileDown, Globe, PenSquare } from "lucide-react";

export function VenueCallToAction() {
  return (
    <Section background="muted" spacing="lg" className="bg-black!">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Heading as="h2" level="h2" className="text-white!">
            Be Part of Africa&apos;s Digital Trade Revolution
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-white/80!">
            Whether in Abuja or online, your participation shapes the future of
            trade, innovation, and collaboration across Africa.
          </Body>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            variant="default"
            size="lg"
            asChild
            className="inline-flex items-center gap-2"
          >
            <a href="/register">
              <PenSquare className="size-5" />
              Register Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <a href="#">
              <FileDown className="size-5" />
              Download Participant Guide
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <a href="/register">
              <Globe className="size-5" />
              Join Virtually
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
