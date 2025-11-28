import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Award,
  Rocket,
  Building,
  Network,
  TrendingUp,
  CheckCircle,
  Calendar,
} from "lucide-react";

const postHackathonActivities = [
  {
    title: "Winner Announcement & Recognition",
    date: "May 13-19, 2026",
    duration: "1 week",
    icon: Award,
    description: "Comprehensive winner recognition and media coverage campaign",
    activities: [
      "Official winner announcement ceremony",
      "Media interviews and press coverage",
      "Social media celebration campaigns",
      "Winner profile features and case studies",
      "Initial prize disbursement (50% of cash prizes)",
    ],
    outcomes: ["Public recognition", "Media coverage", "Initial funding"],
  },
  {
    title: "Incubation Program Onboarding",
    date: "May 20 - June 15, 2026",
    duration: "4 weeks",
    icon: Building,
    description:
      "Integration into comprehensive incubation and acceleration programs",
    activities: [
      "Incubation program enrollment and orientation",
      "Mentor assignment and relationship establishment",
      "Legal entity formation and IP protection",
      "Business model refinement and validation",
      "Technical architecture review and optimization",
    ],
    outcomes: ["Program enrollment", "Legal setup", "Mentor relationships"],
  },
  {
    title: "Market Validation & Development",
    date: "June 16 - August 31, 2026",
    duration: "10 weeks",
    icon: TrendingUp,
    description: "Intensive market validation and product development phase",
    activities: [
      "Customer discovery and market research",
      "MVP development and iterative testing",
      "Pilot program development with partners",
      "Regulatory compliance and approval processes",
      "Go-to-market strategy development",
    ],
    outcomes: ["Market validation", "MVP completion", "Pilot partnerships"],
  },
  {
    title: "Scaling & Investment Preparation",
    date: "September 1 - November 30, 2026",
    duration: "12 weeks",
    icon: Rocket,
    description: "Preparation for scaling and investment fundraising",
    activities: [
      "Investment readiness and pitch deck development",
      "Due diligence preparation and documentation",
      "Strategic partnership negotiations",
      "Cross-border expansion planning",
      "Team scaling and talent acquisition",
    ],
    outcomes: [
      "Investment readiness",
      "Strategic partnerships",
      "Expansion plans",
    ],
  },
  {
    title: "Alumni Network Integration",
    date: "December 1, 2026 - Ongoing",
    duration: "Lifetime",
    icon: Network,
    description:
      "Long-term integration into the AfCFTA Hackathon alumni ecosystem",
    activities: [
      "Alumni network onboarding and integration",
      "Ongoing mentorship and advisory support",
      "Peer collaboration and partnership opportunities",
      "Future event participation and leadership roles",
      "Continuous learning and development programs",
    ],
    outcomes: ["Alumni status", "Ongoing support", "Leadership opportunities"],
  },
];

const supportPrograms = [
  {
    title: "Incubation Programs",
    description: "Access to premium incubation facilities across Africa",
    duration: "6-12 months",
    value: "$500K+",
    benefits: [
      "Co-working spaces",
      "Business development",
      "Legal support",
      "Technical resources",
    ],
  },
  {
    title: "Mentorship Network",
    description:
      "1-on-1 guidance from industry leaders and successful entrepreneurs",
    duration: "12+ months",
    value: "$300K+",
    benefits: [
      "Expert mentors",
      "Regular check-ins",
      "Strategic guidance",
      "Network access",
    ],
  },
  {
    title: "Investment Pipeline",
    description: "Direct access to investors and funding opportunities",
    duration: "Ongoing",
    value: "$1M+",
    benefits: [
      "VC introductions",
      "Pitch opportunities",
      "Due diligence support",
      "Funding facilitation",
    ],
  },
  {
    title: "Market Access",
    description: "Partnerships and pilot opportunities across African markets",
    duration: "2+ years",
    value: "$400K+",
    benefits: [
      "Pilot programs",
      "Government contracts",
      "Corporate partnerships",
      "Market entry support",
    ],
  },
];

export function PostHackathonPhase() {
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
          <Badge variant="outline" className="mb-4">
            Phase Three
          </Badge>
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            Post-Hackathon Phase
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            The journey doesn't end with the hackathon. Winners enter a
            comprehensive support ecosystem designed to transform innovative
            ideas into scalable businesses that can impact millions across
            Africa.
          </Body>
        </motion.div>

        {/* Phase Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 text-center"
        >
          <Card className="p-6">
            <div className="space-y-2">
              <Calendar className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                6+ Months
              </Heading>
              <Body size="sm" color="muted">
                Structured support period
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <TrendingUp className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                $2.75M+
              </Heading>
              <Body size="sm" color="muted">
                Non-cash support value
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Network className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Lifetime
              </Heading>
              <Body size="sm" color="muted">
                Alumni network access
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Timeline Activities */}
        <div className="space-y-8">
          {postHackathonActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      {index < postHackathonActivities.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-4"></div>
                      )}
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <Heading
                            as="h3"
                            level="h5"
                            className="text-gray-900 dark:text-gray-50"
                          >
                            {activity.title}
                          </Heading>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <Badge variant="outline">{activity.date}</Badge>
                            <Badge variant="secondary">
                              {activity.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <Body className="text-gray-600 dark:text-gray-400">
                        {activity.description}
                      </Body>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Body
                            size="sm"
                            weight="semibold"
                            transform="uppercase"
                            color="muted"
                          >
                            Key Activities:
                          </Body>
                          <ul className="space-y-1">
                            {activity.activities.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                                <Body
                                  size="sm"
                                  className="text-gray-700 dark:text-gray-300"
                                >
                                  {item}
                                </Body>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <Body
                            size="sm"
                            weight="semibold"
                            transform="uppercase"
                            color="muted"
                          >
                            Expected Outcomes:
                          </Body>
                          <ul className="space-y-1">
                            {activity.outcomes.map((outcome, outcomeIndex) => (
                              <li
                                key={outcomeIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                <Body
                                  size="sm"
                                  className="text-gray-700 dark:text-gray-300"
                                >
                                  {outcome}
                                </Body>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Support Programs */}
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
              Comprehensive Support Programs
            </Heading>
            <Body color="muted" className="mt-2">
              Multi-faceted support ecosystem for sustainable growth and impact
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {supportPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {program.title}
                        </Heading>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {program.duration}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {program.value}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <Body
                      size="sm"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {program.description}
                    </Body>

                    <div className="space-y-2">
                      <Body
                        size="sm"
                        weight="semibold"
                        transform="uppercase"
                        color="muted"
                      >
                        Key Benefits:
                      </Body>
                      <div className="grid grid-cols-2 gap-1">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                            <Body
                              size="xs"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {benefit}
                            </Body>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-primary text-white rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading as="h3" level="h4" className="text-white">
              Join the Success Stories
            </Heading>
            <Body className="max-w-2xl mx-auto text-white/90">
              Previous hackathon winners have gone on to raise over $50M in
              funding, create 2,000+ jobs, and impact millions of lives across
              Africa. Your solution could be next.
            </Body>
            <Body size="sm" className="text-white/80">
              The post-hackathon journey is where ideas become reality and
              dreams become businesses.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
