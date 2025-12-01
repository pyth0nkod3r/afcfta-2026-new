import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Crown, Award, Medal, Users } from "lucide-react";

const prizeCategories = [
  {
    title: "Grand Prize – AfCFTA Digital Innovation Champion",
    icon: Crown,
    amount: "₦20,000,000",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    description:
      "Best overall innovation demonstrating scalability, inclusiveness, and alignment with AfCFTA Digital Trade Protocol.",
    badge: "🥇 Grand Prize",
  },
  {
    title: "1st Runner-Up – Trade Technology Pioneer",
    icon: Award,
    amount: "₦10,000,000",
    color: "bg-gradient-to-br from-gray-400 to-gray-600",
    description: "Exceptional technical innovation with strong potential for market deployment.",
    badge: "🥈 1st Runner-Up",
  },
  {
    title: "2nd Runner-Up – Policy Impact Solution",
    icon: Medal,
    amount: "₦7,000,000",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    description: "Solution showing effective alignment with trade facilitation and compliance frameworks.",
    badge: "🥉 2nd Runner-Up",
  },
  {
    title: "Top 10 Finalists",
    icon: Users,
    amount: "₦23,000,000",
    amountDetail: "shared",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    description:
      "Recognition and support for category excellence and innovation potential.",
    badge: "🧩 Top 10 Finalists",
    extraBenefit: "+ mentorship package",
  },
];

export function PrizeCategories() {
  return (
    <Section id="prize-categories" background="muted" spacing="lg" className="bg-black!">
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
            className="text-white"
          >
            Celebrating Africa&apos;s Top Digital Trade Innovators
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-white/90">
            Outstanding teams will receive monetary rewards, thematic recognitions, 
            incubation support, and integration opportunities with AfCFTA digital 
            systems and national trade frameworks.
          </Body>
        </motion.div>

        {/* Prize Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prizeCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow bg-white/10 border-white/20">
                  <div className="space-y-4">
                    <div className="text-center space-y-3">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center`}
                      >
                        <IconComponent className="size-8 text-white" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                          {category.badge}
                        </Badge>
                        <Heading
                          as="h3"
                          level="h6"
                          className="text-white"
                        >
                          {category.title}
                        </Heading>
                        <div className="text-2xl font-bold text-white mt-2">
                          {category.amount}
                        </div>
                        {category.amountDetail && (
                          <div className="text-sm text-white/70">
                            {category.amountDetail}
                          </div>
                        )}
                        {category.extraBenefit && (
                          <div className="text-sm text-white/80 font-medium mt-1">
                            {category.extraBenefit}
                          </div>
                        )}
                      </div>
                      <Body
                        size="sm"
                        className="text-white/80"
                      >
                        {category.description}
                      </Body>
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
          className="text-center bg-white/10 border border-white/20 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h3"
              className="text-white"
            >
              Total Cash Reward: ₦60 Million
            </Heading>
            <Body className="max-w-2xl mx-auto text-white/90">
              Non-Cash Rewards: Access to mentorship, incubation, and regional 
              partnership programs.
            </Body>
            <Body size="sm" className="text-white/70">
              Distributed among top 10 teams with continental recognition across 
              AfCFTA, ECOWAS, and Partner Institutions.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
