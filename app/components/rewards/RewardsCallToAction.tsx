import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Users,
  Calendar,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";

const actionItems = [
  {
    title: "Register Your Team",
    description:
      "Start your journey to winning life-changing prizes and opportunities",
    icon: Users,
    action: "Register Now",
    href: "/register",
    variant: "primary" as const,
  },
  {
    title: "View Challenge Tracks",
    description:
      "Explore the 10 challenge tracks and find your area of expertise",
    icon: Trophy,
    action: "Explore Tracks",
    href: "/challenge-tracks",
    variant: "outline" as const,
  },
  {
    title: "Check Important Dates",
    description: "Stay updated on registration deadlines and event timeline",
    icon: Calendar,
    action: "View Timeline",
    href: "/timeline-format",
    variant: "outline" as const,
  },
];

const quickStats = [
  {
    label: "Total Prize Pool",
    value: "$500K+",
    description: "Cash prizes across all categories",
  },
  {
    label: "Non-Cash Benefits",
    value: "$2.75M+",
    description: "Incubation, mentorship, and opportunities",
  },
  {
    label: "Award Categories",
    value: "15+",
    description: "Multiple ways to win and be recognized",
  },
  {
    label: "Winner Support",
    value: "12 Months",
    description: "Ongoing support and integration",
  },
];

export function RewardsCallToAction() {
  return (
    <Section background="muted" spacing="lg">
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
              <Heading as="h2" level="h2" className="text-white">
                Ready to Compete for Life-Changing Rewards?
              </Heading>
              <Body size="lg" className="max-w-3xl mx-auto text-white/90">
                Join Africa's premier innovation competition and compete for
                over $500,000 in prizes plus $2.75M+ in non-cash benefits. Your
                breakthrough solution could transform African trade and launch
                your entrepreneurial journey.
              </Body>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/register">
                  Register Your Team
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <a href="/challenge-tracks">
                  View Challenge Tracks
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <Heading as="h3" level="h3" color="primary">
                    {stat.value}
                  </Heading>
                  <Body
                    weight="semibold"
                    className="text-gray-900 dark:text-gray-50"
                  >
                    {stat.label}
                  </Body>
                  <Body size="sm" color="muted">
                    {stat.description}
                  </Body>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Items */}
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
              Take Action Today
            </Heading>
            <Body color="muted" className="mt-2">
              Everything you need to get started and maximize your chances of
              winning
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {actionItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
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
                          {item.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {item.description}
                        </Body>
                      </div>
                      <Button
                        variant={item.variant}
                        size="sm"
                        asChild
                        className="w-full group-hover:shadow-md transition-shadow"
                      >
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-2"
                        >
                          {item.action}
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

        {/* Additional Resources */}
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
              Need More Information?
            </Heading>
            <Body color="muted" className="mt-2">
              Access additional resources and get your questions answered
            </Body>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/assets/rewards-guide.pdf" download>
                <Download className="size-4" />
                Download Rewards Guide
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
              <a href="mailto:rewards@afcfta-hackathon.org">
                <Mail className="size-4" />
                Contact Rewards Team
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
            <Trophy className="size-16 mx-auto text-primary" />
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Your Innovation Could Change Africa
            </Heading>
            <Body className="max-w-2xl mx-auto">
              Beyond the substantial rewards, you'll be part of a movement
              that's transforming how Africa trades, connects, and prospers. The
              impact of your solution could benefit millions across the
              continent.
            </Body>
            <Body size="sm" color="muted">
              Registration closes on [Date]. Don't miss this opportunity to be
              part of Africa's digital trade revolution.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
