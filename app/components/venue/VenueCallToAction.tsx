import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { FileDown, Globe, PenSquare } from "lucide-react";

export function VenueCallToAction() {
  return (
    \u003cSection background="muted" spacing="lg" className="bg-black!"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-white!"\u003e
            Be Part of Africa\u0026apos;s Digital Trade Revolution
          \u003c/Heading\u003e
          \u003cBody size="lg" className="max-w-3xl mx-auto text-white/80!"\u003e
            Whether in Abuja or online, your participation shapes the future of
            trade, innovation, and collaboration across Africa.
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* CTA Buttons */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        \u003e
          \u003cButton
            variant="default"
            size="lg"
            asChild
            className="inline-flex items-center gap-2"
          \u003e
            \u003ca href="/register"\u003e
              \u003cPenSquare className="size-5" /\u003e
              Register Now
            \u003c/a\u003e
          \u003c/Button\u003e
          \u003cButton
            variant="outline"
            size="lg"
            asChild
            className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          \u003e
            \u003ca href="#"\u003e
              \u003cFileDown className="size-5" /\u003e
              Download Participant Guide
            \u003c/a\u003e
          \u003c/Button\u003e
          \u003cButton
            variant="outline"
            size="lg"
            asChild
            className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          \u003e
            \u003ca href="/register"\u003e
              \u003cGlobe className="size-5" /\u003e
              Join Virtually
            \u003c/a\u003e
          \u003c/Button\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
