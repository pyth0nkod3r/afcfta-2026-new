import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";

// Mock partner logos - in a real implementation, these would be actual logo images
const pastPartners = [
  {
    name: "African Union",
    category: "Government",
    logo: "/images/partners/au-logo.png",
  },
  {
    name: "World Bank",
    category: "Financial",
    logo: "/images/partners/worldbank-logo.png",
  },
  {
    name: "Microsoft",
    category: "Technology",
    logo: "/images/partners/microsoft-logo.png",
  },
  {
    name: "Google",
    category: "Technology",
    logo: "/images/partners/google-logo.png",
  },
  {
    name: "Mastercard",
    category: "Financial",
    logo: "/images/partners/mastercard-logo.png",
  },
  {
    name: "Visa",
    category: "Financial",
    logo: "/images/partners/visa-logo.png",
  },
  {
    name: "MTN Group",
    category: "Telecommunications",
    logo: "/images/partners/mtn-logo.png",
  },
  {
    name: "Safaricom",
    category: "Telecommunications",
    logo: "/images/partners/safaricom-logo.png",
  },
  {
    name: "Standard Bank",
    category: "Financial",
    logo: "/images/partners/standardbank-logo.png",
  },
  {
    name: "Ecobank",
    category: "Financial",
    logo: "/images/partners/ecobank-logo.png",
  },
  {
    name: "University of Cape Town",
    category: "Academic",
    logo: "/images/partners/uct-logo.png",
  },
  {
    name: "Lagos Business School",
    category: "Academic",
    logo: "/images/partners/lbs-logo.png",
  },
  {
    name: "Flutterwave",
    category: "Fintech",
    logo: "/images/partners/flutterwave-logo.png",
  },
  {
    name: "Paystack",
    category: "Fintech",
    logo: "/images/partners/paystack-logo.png",
  },
  {
    name: "Andela",
    category: "Technology",
    logo: "/images/partners/andela-logo.png",
  },
  {
    name: "iHub",
    category: "Innovation",
    logo: "/images/partners/ihub-logo.png",
  },
];

// Create two sets for seamless scrolling
const partnersRow1 = pastPartners.slice(0, 8);
const partnersRow2 = pastPartners.slice(8, 16);

export function PastPartners() {
  return (
    <Section spacing="lg">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            Highlighted Past Partners
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            We&apos;re proud to have collaborated with leading organizations across
            Africa and globally. Join this distinguished network of innovation
            partners.
          </Body>
        </motion.div>

        {/* Partner Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-4 text-center"
        >
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                50+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Strategic Partners
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                25
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                African Countries
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                $2M+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Partnership Value
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                100%
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Partner Satisfaction
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Scrolling Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8 overflow-hidden"
        >
          <div className="text-center">
            <Body
              size="sm"
              weight="semibold"
              transform="uppercase"
              color="muted"
            >
              Trusted by Leading Organizations
            </Body>
          </div>

          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-left">
              {[...partnersRow1, ...partnersRow1].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for partner logo */}
                  <div className="text-center p-4">
                    <Body
                      size="sm"
                      weight="semibold"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {partner.name}
                    </Body>
                    <Body size="xs" color="muted">
                      {partner.category}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-right">
              {[...partnersRow2, ...partnersRow2].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for partner logo */}
                  <div className="text-center p-4">
                    <Body
                      size="sm"
                      weight="semibold"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {partner.name}
                    </Body>
                    <Body size="xs" color="muted">
                      {partner.category}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partner Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <blockquote className="space-y-4">
              <Body
                size="lg"
                className="italic text-gray-700 dark:text-gray-300"
              >
                &quot;Partnering with the AfCFTA Hackathon has been transformational
                for our organization. The quality of innovation, the caliber of
                participants, and the impact on African trade development
                exceeded all our expectations.&quot;
              </Body>
              <div className="space-y-1">
                <Body
                  weight="semibold"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Dr. Sarah Okonkwo
                </Body>
                <Body size="sm" color="muted">
                  Director of Innovation, African Development Bank
                </Body>
              </div>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
