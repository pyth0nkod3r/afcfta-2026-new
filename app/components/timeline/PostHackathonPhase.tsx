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
    title: "🏆 Winners' Incubation Program",
    date: "May–June 2026",
    duration: "",
    icon: Award,
    description:
      "Selected teams receive funding, mentorship, and policy alignment support.",
    activities: [],
    outcomes: [],
  },
  {
    title: "📊 Pilot Implementation & Partnerships",
    date: "June–July 2026",
    duration: "",
    icon: Building,
    description:
      "Collaboration with government agencies, investors, and private sector partners to deploy pilot solutions.",
    activities: [],
    outcomes: [],
  },
  {
    title: "📘 Whitepaper Dissemination",
    date: "July 2026",
    duration: "",
    icon: TrendingUp,
    description:
      "Publication of the Nigeria AfCFTA Digital Trade Whitepaper, featuring policy insights and innovation outcomes from the hackathon.",
    activities: [],
    outcomes: [],
  },
  {
    title: "🌍 Continental Showcase",
    date: "Ongoing",
    duration: "",
    icon: Network,
    description:
      "Winning teams featured across regional AfCFTA innovation and trade events.",
    activities: [],
    outcomes: [],
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
              <Heading as="h3" level="h4" className="text-black">
                April – July 2026
              </Heading>
              <Body size="sm" className="text-black/70">
                Post-Hackathon Phase
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <TrendingUp className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h4" className="text-black">
                Incubation
              </Heading>
              <Body size="sm" className="text-black/70">
                Winners' program
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Network className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h4" className="text-black">
                Continental
              </Heading>
              <Body size="sm" className="text-black/70">
                Showcase events
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
                          <Heading as="h3" level="h5" className="text-black">
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

                      <Body className="text-black/70">
                        {activity.description}
                      </Body>
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
            <Heading as="h3" level="h3" className="text-black">
              Comprehensive Support Programs
            </Heading>
            <Body className="mt-2 text-black/70">
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
                        <Heading as="h4" level="h6" className="text-black">
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

                    <Body size="sm" className="text-black/70">
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
