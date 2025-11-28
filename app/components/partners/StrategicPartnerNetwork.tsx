import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Building2,
  Landmark,
  GraduationCap,
  Briefcase,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

const partnerCategories = [
  {
    title: "Government & Policy",
    icon: Landmark,
    description:
      "African Union, national governments, and policy-making institutions driving continental integration.",
    partners: [
      "African Union Commission",
      "AfCFTA Secretariat",
      "National Trade Ministries",
      "Development Finance Institutions",
    ],
  },
  {
    title: "Technology & Innovation",
    icon: Building2,
    description:
      "Leading tech companies, startups, and innovation hubs across Africa and globally.",
    partners: [
      "Major Tech Companies",
      "African Innovation Hubs",
      "Fintech Leaders",
      "E-commerce Platforms",
    ],
  },
  {
    title: "Academic & Research",
    icon: GraduationCap,
    description:
      "Universities, research institutions, and educational organizations fostering innovation.",
    partners: [
      "African Universities",
      "Research Institutes",
      "Innovation Centers",
      "Educational Foundations",
    ],
  },
  {
    title: "Financial Services",
    icon: Briefcase,
    description:
      "Banks, investment firms, and financial institutions supporting African entrepreneurship.",
    partners: [
      "Development Banks",
      "Commercial Banks",
      "Investment Funds",
      "Microfinance Institutions",
    ],
  },
  {
    title: "International Organizations",
    icon: Globe,
    description:
      "Global organizations and multilateral institutions supporting African development.",
    partners: [
      "World Bank Group",
      "UN Organizations",
      "International NGOs",
      "Bilateral Agencies",
    ],
  },
  {
    title: "Industry Associations",
    icon: Users,
    description:
      "Trade associations, chambers of commerce, and professional organizations.",
    partners: [
      "Chambers of Commerce",
      "Trade Associations",
      "Professional Bodies",
      "Industry Networks",
    ],
  },
];

export function StrategicPartnerNetwork() {
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
            Strategic Partner Network
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Our diverse ecosystem of partners spans across sectors, bringing
            together the expertise, resources, and networks needed to drive
            meaningful innovation in African trade and commerce.
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <Heading
                        as="h3"
                        level="h5"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {category.title}
                      </Heading>
                    </div>

                    <Body
                      size="sm"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {category.description}
                    </Body>

                    <div className="space-y-2">
                      <Body
                        size="sm"
                        weight="semibold"
                        transform="uppercase"
                        color="muted"
                      >
                        Partner Types:
                      </Body>
                      <ul className="space-y-1">
                        {category.partners.map((partner, partnerIndex) => (
                          <li
                            key={partnerIndex}
                            className="flex items-center gap-2"
                          >
                            <ArrowRight className="size-3 text-primary" />
                            <Body
                              size="sm"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {partner}
                            </Body>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Join Our Growing Network
            </Heading>
            <Body className="max-w-2xl mx-auto">
              We're actively building partnerships across all sectors. Whether
              you're a government institution, private company, academic
              organization, or international body, there's a place for you in
              our ecosystem.
            </Body>
            <Body size="sm" color="muted">
              Current network includes 50+ strategic partners across 25 African
              countries
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
