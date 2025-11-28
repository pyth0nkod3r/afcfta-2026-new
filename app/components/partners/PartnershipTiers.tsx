import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Check, Crown, Diamond, Award, Star } from "lucide-react";

const tiers = [
  {
    name: "Platinum",
    icon: Crown,
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
    badge: "Premier Partner",
    investment: "$50,000+",
    benefits: [
      "Exclusive title sponsor recognition",
      "Prime booth location at venue",
      "Speaking slot at opening ceremony",
      "Logo on all marketing materials",
      "Access to all participant data",
      "Private networking session with winners",
      "Custom branded challenge track",
      "Year-round partnership benefits",
      "Executive advisory board seat",
      "First access to winning solutions",
    ],
  },
  {
    name: "Diamond",
    icon: Diamond,
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    badge: "Strategic Partner",
    investment: "$25,000+",
    benefits: [
      "Co-sponsor recognition",
      "Premium booth location",
      "Panel discussion opportunity",
      "Logo on event materials",
      "Access to participant profiles",
      "Networking session access",
      "Branded workshop session",
      "6-month partnership benefits",
      "Mentorship program participation",
      "Early access to project demos",
    ],
  },
  {
    name: "Gold",
    icon: Award,
    color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    badge: "Supporting Partner",
    investment: "$10,000+",
    benefits: [
      "Partner recognition",
      "Standard booth space",
      "Workshop hosting opportunity",
      "Logo on website and programs",
      "Access to networking events",
      "Recruitment opportunities",
      "Social media mentions",
      "3-month partnership benefits",
      "Access to talent pipeline",
      "Project showcase viewing",
    ],
  },
  {
    name: "Silver",
    icon: Star,
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    badge: "Community Partner",
    investment: "$5,000+",
    benefits: [
      "Community partner listing",
      "Shared booth space available",
      "Networking event access",
      "Website logo placement",
      "Social media recognition",
      "Volunteer opportunities",
      "Event documentation access",
      "1-month partnership benefits",
      "Community engagement",
      "Future event priority",
    ],
  },
];

export function PartnershipTiers() {
  return (
    <Section background="muted" spacing="lg">
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
            Partnership Tiers
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Choose the partnership level that aligns with your organization's
            goals and investment capacity. Each tier offers unique benefits and
            opportunities to engage with Africa's brightest innovators.
          </Body>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    {/* Tier Header */}
                    <div className="text-center space-y-3">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full ${tier.color} flex items-center justify-center`}
                      >
                        <IconComponent className="size-8 text-white" />
                      </div>
                      <div>
                        <Heading
                          as="h3"
                          level="h4"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {tier.name}
                        </Heading>
                        <Badge variant="secondary" className="mt-1">
                          {tier.badge}
                        </Badge>
                      </div>
                      <Body size="lg" weight="semibold" color="primary">
                        {tier.investment}
                      </Body>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      <Body weight="semibold" size="sm" transform="uppercase">
                        Benefits Include:
                      </Body>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-2"
                          >
                            <Check className="size-4 text-green-600 mt-0.5 shrink-0" />
                            <Body
                              size="sm"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {benefit}
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
      </div>
    </Section>
  );
}
