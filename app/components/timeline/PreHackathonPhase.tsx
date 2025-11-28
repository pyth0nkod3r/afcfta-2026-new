import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  UserPlus,
  Users,
  BookOpen,
  Target,
  Calendar,
  CheckCircle,
} from "lucide-react";

const preHackathonActivities = [
  {
    title: "Registration Opens",
    date: "January 15, 2026",
    duration: "8 weeks",
    icon: UserPlus,
    description: "Team registration and individual participant signup begins",
    activities: [
      "Online registration portal launches",
      "Team formation and recruitment",
      "Individual skill-based matching",
      "Early bird registration incentives",
      "Regional information sessions",
    ],
    deliverables: [
      "Registered teams",
      "Participant profiles",
      "Team compositions",
    ],
  },
  {
    title: "Team Formation & Networking",
    date: "February 1-28, 2026",
    duration: "4 weeks",
    icon: Users,
    description:
      "Facilitated team building and cross-border collaboration setup",
    activities: [
      "Virtual networking events",
      "Skill-based team matching",
      "Cross-country team formation",
      "Mentor introductions",
      "Regional meetups and workshops",
    ],
    deliverables: ["Finalized teams", "Team agreements", "Mentor assignments"],
  },
  {
    title: "Preparation & Training",
    date: "March 1-31, 2026",
    duration: "4 weeks",
    icon: BookOpen,
    description:
      "Intensive preparation phase with workshops and resource access",
    activities: [
      "Technical workshops and masterclasses",
      "Business model development sessions",
      "AfCFTA trade protocol training",
      "Platform and tool familiarization",
      "Pitch development workshops",
    ],
    deliverables: [
      "Training certificates",
      "Initial project concepts",
      "Team readiness assessment",
    ],
  },
  {
    title: "Challenge Deep-Dive",
    date: "April 1-15, 2026",
    duration: "2 weeks",
    icon: Target,
    description:
      "Detailed exploration of challenge tracks and problem statements",
    activities: [
      "Challenge track selection",
      "Problem statement analysis",
      "Market research and validation",
      "Stakeholder interviews",
      "Solution ideation sessions",
    ],
    deliverables: [
      "Challenge selection",
      "Problem analysis",
      "Initial solution concepts",
    ],
  },
];

export function PreHackathonPhase() {
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
            Phase One
          </Badge>
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            Pre-Hackathon Phase
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            A comprehensive 4-month preparation period designed to ensure all
            participants are equipped with the knowledge, tools, and networks
            needed for success during the intensive hackathon days.
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
                January - April 2026
              </Heading>
              <Body size="sm" color="muted">
                4-month preparation period
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Users className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                5,000+ Participants
              </Heading>
              <Body size="sm" color="muted">
                Expected registration volume
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <BookOpen className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                50+ Workshops
              </Heading>
              <Body size="sm" color="muted">
                Training and preparation sessions
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Timeline Activities */}
        <div className="space-y-8">
          {preHackathonActivities.map((activity, index) => {
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
                      {index < preHackathonActivities.length - 1 && (
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
                            Deliverables:
                          </Body>
                          <ul className="space-y-1">
                            {activity.deliverables.map(
                              (deliverable, deliverableIndex) => (
                                <li
                                  key={deliverableIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                  <Body
                                    size="sm"
                                    className="text-gray-700 dark:text-gray-300"
                                  >
                                    {deliverable}
                                  </Body>
                                </li>
                              ),
                            )}
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

        {/* Phase Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Ready for the Hackathon
            </Heading>
            <Body className="max-w-2xl mx-auto">
              By the end of the pre-hackathon phase, all participants will have
              formed strong teams, developed deep understanding of their chosen
              challenges, and gained the skills needed to build impactful
              solutions during the intensive hackathon weekend.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
