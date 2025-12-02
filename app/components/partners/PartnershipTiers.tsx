import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Check, Crown, Diamond, Award, Star } from "lucide-react";

const tiers = [
  {
    name: "Platinum Partners",
    icon: Crown,
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
    badge: "Leading Institutions",
    description: "Leading institutions driving continental innovation.",
    benefits: [
      "Premier brand visibility across all hackathon platforms, digital campaigns, and event media",
      "Co-branding on event materials, website, and press releases",
      "Opportunity to host keynote sessions or innovation challenges",
      "Access to curated networking with top startups, innovators, and policymakers",
      "Exclusive recognition during awards and hackathon closing ceremonies",
    ],
  },
  {
    name: "Diamond Partners",
    icon: Diamond,
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    badge: "High-Impact Organizations",
    description: "High-impact organizations supporting digital trade and innovation.",
    benefits: [
      "Prominent logo placement across communications and digital assets",
      "Speaking opportunities in panels, workshops, or mentorship sessions",
      "Inclusion in official post-event reports and partner recognition campaigns",
      "Access to startup deal flow and partnership matchmaking",
      "Mentorship or evaluation role during the hackathon",
    ],
  },
  {
    name: "Gold Partners",
    icon: Award,
    color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    badge: "Key Enablers",
    description: "Key enablers supporting startup growth and skills development.",
    benefits: [
      "Featured branding on select event platforms",
      "Participation in mentorship, judging panels, or training workshops",
      "Access to curated partnership opportunities with innovators and SMEs",
      "Highlighted presence in social media and event newsletters",
    ],
  },
  {
    name: "Silver Partners",
    icon: Star,
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    badge: "Supporting Institutions",
    description: "Supporting institutions contributing to the hackathon's impact.",
    benefits: [
      "Logo presence on event website and materials",
      "Recognition during event sessions and workshops",
      "Opportunity to engage with participants and showcase innovations",
      "Access to select networking events and roundtables",
    ],
  },
];

export function PartnershipTiers() {
  return (
    <Section id="partnership-tiers" background="muted" spacing="lg" className="bg-white text-black">
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
            💎 Maximize Your Impact Through Strategic Collaboration
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            We offer multiple partnership tiers tailored to your organization&apos;s objectives and desired level of visibility.
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
                <Card className="h-full p-6 hover:shadow-lg transition-shadow bg-white border-gray-200">
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
                          className="text-black"
                        >
                          {tier.name}
                        </Heading>
                        <Badge variant="secondary" className="mt-1">
                          {tier.badge}
                        </Badge>
                      </div>
                      <Body size="sm" className="text-gray-700">
                        {tier.description}
                      </Body>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      <Body weight="semibold" size="sm" transform="uppercase" className="text-black">
                        Benefits:
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
                              className="text-gray-700"
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
