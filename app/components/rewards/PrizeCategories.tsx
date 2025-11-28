import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Crown, Award, Star, Users, Trophy } from "lucide-react";

const prizeCategories = [
  {
    title: "Grand Prize Winner",
    icon: Crown,
    amount: "$100,000",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    description:
      "The overall winning team with the most innovative and impactful solution",
    benefits: [
      "$100,000 cash prize",
      "1-year incubation program",
      "Mentorship from industry leaders",
      "Direct access to AfCFTA leadership",
      "Speaking opportunity at major conferences",
      "Priority consideration for pilot programs",
    ],
    badge: "Ultimate Winner",
  },
  {
    title: "Second Place",
    icon: Award,
    amount: "$50,000",
    color: "bg-gradient-to-br from-gray-400 to-gray-600",
    description: "Runner-up team with exceptional innovation and execution",
    benefits: [
      "$50,000 cash prize",
      "6-month incubation program",
      "Mentorship opportunities",
      "Access to investor network",
      "Conference speaking opportunities",
      "Pilot program consideration",
    ],
    badge: "Runner-up",
  },
  {
    title: "Third Place",
    icon: Star,
    amount: "$25,000",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    description: "Third place team with outstanding potential and innovation",
    benefits: [
      "$25,000 cash prize",
      "3-month incubation program",
      "Mentorship access",
      "Networking opportunities",
      "Marketing support",
      "Partnership introductions",
    ],
    badge: "Third Place",
  },
  {
    title: "Top 10 Finalists",
    icon: Users,
    amount: "$10,000",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    description:
      "Each of the remaining top 10 teams receive recognition and support",
    benefits: [
      "$10,000 cash prize each",
      "1-month mentorship program",
      "Access to partner network",
      "Marketing and PR support",
      "Future event invitations",
      "Alumni network access",
    ],
    badge: "Top 10",
  },
  {
    title: "People's Choice Award",
    icon: Trophy,
    amount: "$15,000",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    description: "Voted by the public and hackathon community",
    benefits: [
      "$15,000 cash prize",
      "Social media promotion",
      "Community recognition",
      "Media coverage",
      "Partnership opportunities",
      "Future collaboration invites",
    ],
    badge: "Community Favorite",
  },
];

export function PrizeCategories() {
  return (
    <Section id="prize-categories" background="muted" spacing="lg">
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
            Prize Categories
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Compete for substantial cash prizes and invaluable opportunities to
            scale your innovation across Africa. Every participant has multiple
            pathways to recognition.
          </Body>
        </motion.div>

        {/* Grand Prize - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                <Crown className="size-10 text-white" />
              </div>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  Ultimate Winner
                </Badge>
                <Heading
                  as="h3"
                  level="h3"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Grand Prize Winner
                </Heading>
                <div className="text-4xl font-bold text-primary">$100,000</div>
                <Body className="max-w-2xl mx-auto">
                  The overall winning team with the most innovative and
                  impactful solution for African trade transformation.
                </Body>
              </div>
              <div className="grid gap-3 md:grid-cols-2 text-left max-w-2xl mx-auto">
                {prizeCategories[0].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <Body size="sm">{benefit}</Body>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Prize Categories */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {prizeCategories.slice(1).map((category, index) => {
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
                      <div
                        className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center`}
                      >
                        <IconComponent className="size-8 text-white" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {category.badge}
                        </Badge>
                        <Heading
                          as="h4"
                          level="h5"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {category.title}
                        </Heading>
                        <div className="text-2xl font-bold text-primary mt-1">
                          {category.amount}
                        </div>
                      </div>
                      <Body
                        size="sm"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {category.description}
                      </Body>
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
                        {category.benefits
                          .slice(0, 4)
                          .map((benefit, benefitIndex) => (
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

        {/* Prize Pool Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Total Cash Prize Pool: $315,000
            </Heading>
            <Body className="max-w-2xl mx-auto">
              This represents just the cash component. The total value including
              incubation programs, mentorship, and partnership opportunities
              exceeds $2 million.
            </Body>
            <Body size="sm" color="muted">
              All prizes are subject to terms and conditions. Winners will be
              announced at the closing ceremony.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
