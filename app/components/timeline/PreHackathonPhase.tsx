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
    title: "📢 Call for Applications",
    date: "January 10, 2026",
    duration: "",
    icon: UserPlus,
    description:
      "Open invitation for innovators, startups, developers, and students across Africa.",
    activities: [],
    deliverables: [],
  },
  {
    title: "🧩 Team Formation & Idea Submission",
    date: "January 15–March 1, 2026",
    duration: "",
    icon: Users,
    description:
      "Participants collaborate virtually, submit project ideas under selected challenge tracks.",
    activities: [],
    deliverables: [],
  },
  {
    title: "🎓 Capacity Building & Orientation",
    date: "February 2026",
    duration: "",
    icon: BookOpen,
    description:
      "Virtual workshops, webinars, and orientation sessions covering digital trade, AI, FinTech, and compliance frameworks.",
    activities: [],
    deliverables: [],
  },
  {
    title: "🤝 Mentorship Pairing",
    date: "March 10, 2026",
    duration: "",
    icon: Target,
    description: "Selected teams matched with mentors and technical experts.",
    activities: [],
    deliverables: [],
  },
  {
    title: "✅ Final Selection Announcement",
    date: "March 15, 2026",
    duration: "",
    icon: CheckCircle,
    description: "Official shortlist of hackathon teams published.",
    activities: [],
    deliverables: [],
  },
];

export function PreHackathonPhase() {
  return (
    <Section background="muted" spacing="lg" className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 text-black">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >

          <Heading as="h2" level="h2" className="text-black">
            Building the Foundation for Collaboration and Innovation
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black">
            The pre-hackathon phase prepares participants with the knowledge,
            tools, and context needed to align innovations with the AfCFTA
            Digital Trade Protocol. This stage emphasizes capacity-building,
            team formation, and problem definition.
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
          <Card className="p-6 bg-white/60 border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="space-y-2">
              <Calendar className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h4" className="text-black">
                January – March 2026
              </Heading>
              <Body size="sm" className="text-black">
                Pre-Hackathon Phase
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="space-y-2">
              <Users className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h4" className="text-black">
                Team Formation
              </Heading>
              <Body size="sm" className="text-black">
                Virtual collaboration
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer">
            <div className="space-y-2">
              <BookOpen className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h4" className="text-black">
                Capacity Building
              </Heading>
              <Body size="sm" className="text-black">
                Workshops & orientation
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
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/60 border-white/40 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <IconComponent className="size-6 text-blue-600" />
                      </div>
                      {index < preHackathonActivities.length - 1 && (
                        <div className="w-0.5 h-16 bg-black/10 mt-4"></div>
                      )}
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <Heading
                            as="h3"
                            level="h5"
                            className="text-black"
                          >
                            {activity.title}
                          </Heading>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <Badge
                              variant="outline"
                              className="border-black/20 text-black"
                            >
                              {activity.date}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800"
                            >
                              {activity.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <Body className="text-black">
                        {activity.description}
                      </Body>
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
          className="text-center bg-white/60 rounded-2xl p-8 border border-white/40"
        >
          <div className="space-y-4">
            <Heading as="h3" level="h4" className="text-black">
              Ready for the Hackathon
            </Heading>
            <Body className="max-w-2xl mx-auto text-black">
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
