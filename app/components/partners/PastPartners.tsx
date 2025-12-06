import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";

// Partner logos - using text placeholders until actual logo images are provided
const pastPartners = [
  {
    name: "GFA",
    category: "Innovation",
    logo: "/images/partners/gfa-logo.png",
  },
  {
    name: "NITDA",
    category: "Government",
    logo: "/images/partners/nitda-logo.png",
  },
  {
    name: "AWS",
    category: "Technology",
    logo: "/images/partners/aws-logo.png",
  },
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
    <Section spacing="lg" className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black">
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
            className="text-black"
          >
            📌 Highlighted Past Partners
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            We&apos;re proud to have collaborated with leading organizations across
            Africa and globally. Join this distinguished network of innovation
            partners.
          </Body>
        </motion.div>

        {/* Scrolling Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 overflow-hidden"
        >
          <div className="text-center">
            <Body
              size="sm"
              weight="semibold"
              transform="uppercase"
              className="text-black/70"
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
                  className="flex-shrink-0 w-48 h-24 mx-4 bg-white/60 rounded-lg border border-white/40 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for partner logo */}
                  <div className="text-center p-4">
                    <Body
                      size="sm"
                      weight="semibold"
                      className="text-black"
                    >
                      {partner.name}
                    </Body>
                    <Body size="xs" className="text-black/60">
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
                  className="flex-shrink-0 w-48 h-24 mx-4 bg-white/60 rounded-lg border border-white/40 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  {/* Placeholder for partner logo */}
                  <div className="text-center p-4">
                    <Body
                      size="sm"
                      weight="semibold"
                      className="text-black"
                    >
                      {partner.name}
                    </Body>
                    <Body size="xs" className="text-black/60">
                      {partner.category}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
