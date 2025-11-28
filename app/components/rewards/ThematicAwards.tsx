import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Zap,
  Shield,
  Leaf,
  Users,
  Smartphone,
  TrendingUp,
  Globe,
  Lightbulb,
  Heart,
  Rocket,
} from "lucide-react";

const thematicAwards = [
  {
    title: "Most Innovative Solution",
    icon: Lightbulb,
    amount: "$20,000",
    description:
      "Recognizing groundbreaking innovation that pushes the boundaries of what's possible in African trade.",
    criteria:
      "Novelty, creativity, technical innovation, potential for disruption",
  },
  {
    title: "Best Technical Implementation",
    icon: Zap,
    amount: "$15,000",
    description:
      "Excellence in technical execution, code quality, architecture, and scalability.",
    criteria: "Code quality, technical architecture, performance, scalability",
  },
  {
    title: "Most Secure Solution",
    icon: Shield,
    amount: "$15,000",
    description:
      "Outstanding implementation of security best practices and data protection measures.",
    criteria:
      "Security architecture, data protection, privacy compliance, risk mitigation",
  },
  {
    title: "Best Sustainability Impact",
    icon: Leaf,
    amount: "$15,000",
    description:
      "Solutions that demonstrate significant positive environmental and social impact.",
    criteria:
      "Environmental impact, social sustainability, long-term viability",
  },
  {
    title: "Best User Experience",
    icon: Users,
    amount: "$15,000",
    description:
      "Exceptional user interface design and user experience that prioritizes accessibility and usability.",
    criteria: "UI/UX design, accessibility, user testing, ease of use",
  },
  {
    title: "Best Mobile Solution",
    icon: Smartphone,
    amount: "$12,000",
    description:
      "Outstanding mobile-first solution optimized for African mobile infrastructure.",
    criteria:
      "Mobile optimization, offline capability, low-bandwidth performance",
  },
  {
    title: "Best Business Model",
    icon: TrendingUp,
    amount: "$12,000",
    description:
      "Most viable and scalable business model with clear path to profitability.",
    criteria:
      "Revenue model, market analysis, scalability, financial projections",
  },
  {
    title: "Best Cross-Border Solution",
    icon: Globe,
    amount: "$12,000",
    description:
      "Solution that best addresses cross-border trade challenges and opportunities.",
    criteria:
      "Cross-border functionality, regulatory compliance, multi-country impact",
  },
  {
    title: "Best Social Impact",
    icon: Heart,
    amount: "$10,000",
    description:
      "Solution with the greatest potential for positive social change and community impact.",
    criteria: "Social impact, community benefit, inclusivity, accessibility",
  },
  {
    title: "Most Scalable Solution",
    icon: Rocket,
    amount: "$10,000",
    description:
      "Solution with the highest potential for rapid scaling across African markets.",
    criteria:
      "Scalability potential, market size, growth strategy, technical architecture",
  },
];

export function ThematicAwards() {
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
            Thematic Awards
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Beyond the main prizes, we recognize excellence in specific areas
            that are crucial for African trade development. Each thematic award
            celebrates different aspects of innovation and impact.
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {thematicAwards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <Heading
                          as="h3"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {award.title}
                        </Heading>
                        <div className="text-lg font-bold text-primary">
                          {award.amount}
                        </div>
                      </div>
                    </div>

                    <Body
                      size="sm"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {award.description}
                    </Body>

                    <div className="space-y-2">
                      <Body
                        size="sm"
                        weight="semibold"
                        transform="uppercase"
                        color="muted"
                      >
                        Evaluation Criteria:
                      </Body>
                      <Body
                        size="xs"
                        className="text-gray-700 dark:text-gray-300 italic"
                      >
                        {award.criteria}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Awards Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid gap-6 md:grid-cols-3 text-center"
        >
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                $146,000
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Total Thematic Awards
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                10
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Award Categories
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Heading as="h3" level="h3" color="primary">
                Multiple
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Awards Per Team
              </Body>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Multiple Award Eligibility
            </Heading>
            <Body className="max-w-2xl mx-auto">
              Teams can win multiple thematic awards in addition to main prize
              categories. A single innovative solution could potentially earn
              recognition across several categories, maximizing your total
              rewards.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
