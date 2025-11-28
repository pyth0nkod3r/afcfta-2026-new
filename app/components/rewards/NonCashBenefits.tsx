import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  GraduationCap,
  Users,
  Building,
  Briefcase,
  Globe,
  Megaphone,
  Network,
  Target,
  BookOpen,
  Handshake,
} from "lucide-react";

const benefitCategories = [
  {
    title: "Incubation & Acceleration",
    icon: Building,
    value: "$500K+",
    benefits: [
      "Up to 12 months in premium incubation programs",
      "Access to co-working spaces across Africa",
      "Business development support and guidance",
      "Legal and regulatory compliance assistance",
      "Product development and technical support",
      "Go-to-market strategy development",
    ],
  },
  {
    title: "Mentorship & Advisory",
    icon: Users,
    value: "$300K+",
    benefits: [
      "1-on-1 mentorship with industry leaders",
      "Access to C-level executives and founders",
      "Technical advisory from domain experts",
      "Business strategy guidance from consultants",
      "Regular check-ins and progress reviews",
      "Peer-to-peer learning networks",
    ],
  },
  {
    title: "Investment Opportunities",
    icon: Briefcase,
    value: "$1M+",
    benefits: [
      "Direct introductions to VCs and angel investors",
      "Pitch opportunities at investor events",
      "Due diligence preparation and support",
      "Valuation and term sheet guidance",
      "Access to government funding programs",
      "Grant application assistance",
    ],
  },
  {
    title: "Market Access & Partnerships",
    icon: Globe,
    value: "$400K+",
    benefits: [
      "Pilot program opportunities with major corporations",
      "Government contract consideration",
      "Partnership introductions across Africa",
      "Trade mission participation",
      "Market entry support in new countries",
      "Regulatory pathway guidance",
    ],
  },
  {
    title: "Marketing & Visibility",
    icon: Megaphone,
    value: "$200K+",
    benefits: [
      "PR and media coverage campaigns",
      "Speaking opportunities at major conferences",
      "Social media promotion and content creation",
      "Case study development and publication",
      "Award ceremony recognition and coverage",
      "Ongoing marketing support for 12 months",
    ],
  },
  {
    title: "Technical Resources",
    icon: Network,
    value: "$150K+",
    benefits: [
      "Cloud computing credits (AWS, Azure, GCP)",
      "Software licenses and development tools",
      "API access to partner platforms",
      "Technical infrastructure support",
      "Security audits and compliance reviews",
      "Performance optimization consulting",
    ],
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    value: "$100K+",
    benefits: [
      "Executive education program scholarships",
      "Leadership development workshops",
      "Technical skills training and certifications",
      "Business management courses",
      "Cross-cultural communication training",
      "Continuous learning platform access",
    ],
  },
  {
    title: "Network & Community",
    icon: Handshake,
    value: "$100K+",
    benefits: [
      "Lifetime access to AfCFTA Hackathon alumni network",
      "Exclusive networking events and meetups",
      "Access to partner organization networks",
      "International trade mission invitations",
      "Peer collaboration opportunities",
      "Ongoing community support and resources",
    ],
  },
];

export function NonCashBenefits() {
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
            Non-Cash Benefits
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Beyond monetary prizes, winners gain access to invaluable resources,
            networks, and opportunities that can accelerate their growth and
            impact across African markets.
          </Body>
        </motion.div>

        {/* Total Value Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-primary text-white rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-4">
            <Heading as="h3" level="h2" className="text-white">
              $2.75M+ in Non-Cash Benefits
            </Heading>
            <Body className="max-w-2xl mx-auto text-white/90">
              The total estimated value of non-cash benefits available to
              winners exceeds the cash prize pool, providing long-term value
              that extends far beyond the hackathon event.
            </Body>
          </div>
        </motion.div>

        {/* Benefit Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefitCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-8 text-primary" />
                      </div>
                      <div>
                        <Heading
                          as="h3"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {category.title}
                        </Heading>
                        <div className="text-lg font-bold text-primary mt-1">
                          {category.value}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Body
                        size="sm"
                        weight="semibold"
                        transform="uppercase"
                        color="muted"
                      >
                        Includes:
                      </Body>
                      <ul className="space-y-1">
                        {category.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                            <Body
                              size="xs"
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

        {/* Key Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Delivered Through Strategic Partnerships
            </Heading>
            <Body color="muted" className="mt-2">
              Our network of partners provides these valuable benefits and
              opportunities
            </Body>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
            <Card className="p-4">
              <div className="space-y-2">
                <BookOpen className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Leading Incubators
                </Body>
                <Body size="xs" color="muted">
                  Across 15+ African countries
                </Body>
              </div>
            </Card>
            <Card className="p-4">
              <div className="space-y-2">
                <Target className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Investment Firms
                </Body>
                <Body size="xs" color="muted">
                  $500M+ in available funding
                </Body>
              </div>
            </Card>
            <Card className="p-4">
              <div className="space-y-2">
                <Globe className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Multinational Corps
                </Body>
                <Body size="xs" color="muted">
                  Fortune 500 partnerships
                </Body>
              </div>
            </Card>
            <Card className="p-4">
              <div className="space-y-2">
                <Users className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Expert Mentors
                </Body>
                <Body size="xs" color="muted">
                  200+ industry leaders
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Eligibility Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Benefit Allocation
            </Heading>
            <Body className="max-w-2xl mx-auto">
              Non-cash benefits are allocated based on prize category, with top
              winners receiving access to premium programs and all participants
              gaining access to community benefits and networking opportunities.
            </Body>
            <Body size="sm" color="muted">
              Specific benefit packages will be customized based on team needs
              and solution focus areas.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
