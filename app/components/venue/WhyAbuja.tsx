import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Building,
  Users,
  Globe,
  Zap,
  Shield,
  Plane,
  Landmark,
  TrendingUp,
  Heart,
  Star,
} from "lucide-react";

const strategicAdvantages = [
  {
    title: "Political Capital",
    icon: Landmark,
    description:
      "Nigeria's seat of government and center of political decision-making",
    benefits: [
      "Direct access to government officials and policymakers",
      "Proximity to AfCFTA implementation agencies",
      "Policy influence and regulatory engagement opportunities",
      "Government partnership and pilot program access",
    ],
  },
  {
    title: "Economic Hub",
    icon: TrendingUp,
    description:
      "Major economic center with growing tech and innovation ecosystem",
    benefits: [
      "Access to Nigeria's $440+ billion economy",
      "Growing fintech and startup ecosystem",
      "Major corporate headquarters and regional offices",
      "Investment and funding opportunities",
    ],
  },
  {
    title: "Strategic Location",
    icon: Globe,
    description: "Central position in West Africa with excellent connectivity",
    benefits: [
      "Gateway to West African markets",
      "Central time zone for continental coordination",
      "Regional hub for international organizations",
      "Strategic position for cross-border trade initiatives",
    ],
  },
  {
    title: "Infrastructure Excellence",
    icon: Building,
    description: "Modern infrastructure and world-class facilities",
    benefits: [
      "International airport with direct flights across Africa",
      "Modern conference and event facilities",
      "Reliable power and telecommunications infrastructure",
      "Quality accommodation and hospitality services",
    ],
  },
];

const abujaHighlights = [
  {
    title: "Population & Demographics",
    stats: "3.5+ million residents",
    description: "Diverse, educated population with strong tech adoption",
    icon: Users,
  },
  {
    title: "International Connectivity",
    stats: "Direct flights to 25+ African cities",
    description: "Nnamdi Azikiwe International Airport serves as regional hub",
    icon: Plane,
  },
  {
    title: "Government Presence",
    stats: "100+ embassies and diplomatic missions",
    description: "Diplomatic capital with strong international representation",
    icon: Shield,
  },
  {
    title: "Innovation Ecosystem",
    stats: "50+ tech companies and startups",
    description: "Growing technology sector with government support",
    icon: Zap,
  },
];

const culturalAspects = [
  {
    aspect: "Cultural Diversity",
    description:
      "Home to people from all Nigerian states and international communities",
    significance:
      "Reflects Africa's diversity and promotes cross-cultural collaboration",
  },
  {
    aspect: "Language Accessibility",
    description: "English as official language with multilingual population",
    significance: "Easy communication for participants from across Africa",
  },
  {
    aspect: "Hospitality Tradition",
    description: "Strong tradition of welcoming visitors and guests",
    significance: "Ensures positive experience for international participants",
  },
  {
    aspect: "Innovation Culture",
    description:
      "Growing culture of entrepreneurship and technological innovation",
    significance:
      "Supportive environment for hackathon activities and networking",
  },
];

const economicImpact = [
  "Showcase Nigeria's commitment to AfCFTA implementation",
  "Attract international investment and partnerships to the region",
  "Position Abuja as a continental innovation hub",
  "Generate economic activity and tourism revenue",
  "Create lasting partnerships between Nigerian and continental businesses",
  "Demonstrate Nigeria's leadership in African digital transformation",
];

export function WhyAbuja() {
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
            Why Abuja?
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Abuja offers the perfect combination of political significance,
            economic opportunity, and modern infrastructure to host Africa's
            premier trade innovation event.
          </Body>
        </motion.div>

        {/* Strategic Advantages */}
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
              Strategic Advantages
            </Heading>
            <Body color="muted" className="mt-2">
              Key reasons why Abuja is the ideal location for the AfCFTA
              Hackathon
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strategicAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="size-6 text-primary" />
                        </div>
                        <Heading
                          as="h4"
                          level="h5"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {advantage.title}
                        </Heading>
                      </div>

                      <Body
                        size="sm"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {advantage.description}
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
                        <ul className="space-y-1">
                          {advantage.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                              <Body
                                size="sm"
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
        </motion.div>

        {/* Abuja by Numbers */}
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
              Abuja by Numbers
            </Heading>
            <Body color="muted" className="mt-2">
              Key statistics that make Abuja an ideal hackathon destination
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {abujaHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {highlight.title}
                        </Heading>
                        <Body weight="semibold" color="primary">
                          {highlight.stats}
                        </Body>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {highlight.description}
                        </Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cultural & Social Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Cultural & Social Context
            </Heading>
            <Body color="muted" className="mt-2">
              Why Abuja provides the ideal cultural environment for continental
              collaboration
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {culturalAspects.map((aspect, index) => (
              <motion.div
                key={aspect.aspect}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Heart className="size-5 text-primary" />
                      <Heading
                        as="h4"
                        level="h6"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {aspect.aspect}
                      </Heading>
                    </div>
                    <Body
                      size="sm"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {aspect.description}
                    </Body>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <Body
                        size="sm"
                        weight="semibold"
                        color="muted"
                        transform="uppercase"
                      >
                        Significance:
                      </Body>
                      <Body
                        size="sm"
                        className="text-gray-700 dark:text-gray-300 mt-1"
                      >
                        {aspect.significance}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Economic Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary text-white rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="size-6 text-accent" />
                <Heading as="h3" level="h3" className="text-white">
                  Expected Economic Impact
                </Heading>
              </div>
              <Body className="text-white/90">
                Hosting the AfCFTA Hackathon in Abuja will generate significant
                economic and strategic benefits
              </Body>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {economicImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                  <Body size="sm" className="text-white/90">
                    {impact}
                  </Body>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nigeria's Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Nigeria's Continental Leadership
            </Heading>
            <Body className="max-w-2xl mx-auto">
              As Africa's largest economy and most populous nation, Nigeria
              plays a crucial role in AfCFTA implementation. Hosting the
              hackathon in Abuja demonstrates Nigeria's commitment to
              continental integration and digital trade transformation.
            </Body>
            <Body size="sm" color="muted">
              Nigeria contributes over 15% of Africa's GDP and is home to 20% of
              the continent's population.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
