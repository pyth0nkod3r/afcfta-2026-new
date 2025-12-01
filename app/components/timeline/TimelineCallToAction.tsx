import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Download,
  Mail,
  ExternalLink,
  Clock,
  Bell,
} from "lucide-react";

const nextSteps = [
  {
    title: "Register Your Team",
    description: "Secure your spot in Africa's premier innovation competition",
    icon: Users,
    action: "Register Now",
    href: "/register",
    variant: "primary" as const,
    urgency: "Registration opens January 15, 2026",
  },
  {
    title: "Choose Your Format",
    description:
      "Decide between physical participation in Abuja or virtual from anywhere",
    icon: MapPin,
    action: "Learn More",
    href: "/venue-dates",
    variant: "outline" as const,
    urgency: "Format selection during registration",
  },
  {
    title: "Mark Your Calendar",
    description: "Add all critical dates to your calendar and set up reminders",
    icon: Calendar,
    action: "Download Calendar",
    href: "/assets/hackathon-calendar.ics",
    variant: "outline" as const,
    urgency: "Don't miss important deadlines",
  },
];

const upcomingMilestones = [
  {
    date: "January 15, 2026",
    milestone: "Registration Opens",
    description: "Team and individual registration portal launches",
    daysUntil: "Coming Soon",
    action: "Get notified when registration opens",
  },
  {
    date: "February 1, 2026",
    milestone: "Team Formation Begins",
    description: "Networking events and team matching activities start",
    daysUntil: "Coming Soon",
    action: "Prepare your skills profile",
  },
  {
    date: "May 10-12, 2026",
    milestone: "Hackathon Weekend",
    description: "The main event - 72 hours of intensive innovation",
    daysUntil: "Coming Soon",
    action: "Block your calendar now",
  },
];

export function TimelineCallToAction() {
  return (
    <Section background="muted" spacing="lg" className="bg-white text-black">
      <div className="space-y-12 md:space-y-16">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-primary text-white rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="mb-4 bg-white/10 border-white/20 text-white"
              >
                🏁 6️⃣ Call to Action
              </Badge>
              <Heading as="h2" level="h2" className="text-white">
                Your Innovation Can Shape Africa's Borderless Digital Future
              </Heading>
              <Body size="lg" className="max-w-3xl mx-auto text-white/90">
                Be part of the movement redefining how Africa trades, connects,
                and grows through technology.
              </Body>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/register">📝 Register Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <a href="#full-schedule">📅 Add to Calendar</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <a href="/participant-guide">📘 View Participant Guide</a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Your Next Steps
            </Heading>
            <Body color="muted" className="mt-2">
              Everything you need to do to prepare for the hackathon
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {step.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {step.description}
                        </Body>
                        <Body size="xs" color="muted" className="italic">
                          {step.urgency}
                        </Body>
                      </div>
                      <Button
                        variant={step.variant}
                        size="sm"
                        asChild
                        className="w-full group-hover:shadow-md transition-shadow"
                      >
                        <a
                          href={step.href}
                          className="inline-flex items-center gap-2"
                        >
                          {step.action}
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Upcoming Milestones */}
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
              Upcoming Milestones
            </Heading>
            <Body color="muted" className="mt-2">
              Key dates to keep on your radar
            </Body>
          </div>

          <div className="space-y-4">
            {upcomingMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="size-6 text-primary" />
                      </div>
                      <div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {milestone.milestone}
                        </Heading>
                        <Body size="sm" color="primary" weight="semibold">
                          {milestone.date}
                        </Body>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {milestone.description}
                        </Body>
                      </div>
                    </div>
                    <div className="text-right">
                      <Body size="sm" weight="semibold" color="muted">
                        {milestone.daysUntil}
                      </Body>
                      <Body size="xs" color="muted">
                        {milestone.action}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stay Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Stay Updated
            </Heading>
            <Body color="muted" className="mt-2">
              Get the latest updates and reminders about important dates
            </Body>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="mailto:updates@afcfta-hackathon.org?subject=Newsletter Subscription Request">
                <Bell className="size-4" />
                Subscribe to Updates
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/faq">
                <ExternalLink className="size-4" />
                View FAQ
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="mailto:timeline@afcfta-hackathon.org">
                <Mail className="size-4" />
                Contact Support
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Final Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Clock className="size-16 mx-auto text-primary" />
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              The Journey Starts Now
            </Heading>
            <Body className="max-w-2xl mx-auto">
              This comprehensive timeline is designed to maximize your success.
              From preparation through post-hackathon scaling, every phase
              builds toward transforming your innovative ideas into impactful
              solutions for Africa.
            </Body>
            <Body size="sm" color="muted">
              Join thousands of innovators who are already preparing for
              Africa's digital trade revolution.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
