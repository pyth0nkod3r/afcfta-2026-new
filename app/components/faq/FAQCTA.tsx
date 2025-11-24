import { HelpCircle, UserPlus, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function FAQCTA() {
  return (
    <section className="relative bg-linear-to-tr from-slate-800 via-slate-800 to-slate-900 py-14 sm:py-18">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-2 text-white font-semibold text-sm">
            <HelpCircle className="w-5 h-5" aria-hidden />
            Still Have Questions?
          </div>
          <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold mb-2">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="max-w-2xl text-white/80 mb-5">
            Browse all FAQs, register for the hackathon, or contact our support
            team for personalized assistance. We&apos;re here to help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <Link to="/faqs">
                <FileText className="w-5 h-5" />
                View All FAQs
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 border-white text-white hover:bg-white/10"
            >
              <Link to="/register">
                <UserPlus className="w-5 h-5" />
                Register Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
