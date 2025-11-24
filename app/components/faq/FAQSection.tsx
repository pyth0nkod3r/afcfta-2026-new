import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { faqCategories, faqItems, type FAQCategory } from "./faqData";

export function FAQSection() {
  const getFAQsByCategory = (category: FAQCategory) => {
    return faqItems.filter((item) => item.category === category);
  };

  return (
    <section className="w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
            📋 FAQ Categories
          </span>
          <h2 className="text-2xl font-heading font-bold text-white sm:text-3xl lg:text-4xl mb-4">
            Browse Questions by Category
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 text-base sm:text-lg">
            Find answers organized by topic to quickly locate the information
            you need
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {faqCategories.map((category, categoryIndex) => {
            const categoryFAQs = getFAQsByCategory(category.id);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-heading font-bold text-white sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    {category.description}
                  </p>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-2"
                >
                  {categoryFAQs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-white/10 bg-white/5 rounded-lg px-4 sm:px-6 backdrop-blur-sm"
                    >
                      <AccordionTrigger className="text-white hover:no-underline text-left py-4 sm:py-5">
                        <span className="font-semibold text-sm sm:text-base pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80 text-sm sm:text-base leading-relaxed pb-4 sm:pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
