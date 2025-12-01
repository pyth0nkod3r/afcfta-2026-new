import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  ArrowRight,
  Trophy,
  BookOpen,
  Video,
} from "lucide-react";

export function RewardsCallToAction() {
  return (
    <Section background="muted" spacing="lg" className="bg-black!">
      <div className="space-y-12 md:space-y-16">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <Heading as="h2" level="h2" className="text-white">
              Your Innovation Deserves Continental Recognition
            </Heading>
            <Body size="lg" className="max-w-3xl mx-auto text-white/90">
              Compete, collaborate, and create solutions that redefine trade in 
              Africa. The next big idea could be yours.
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
                Apply Now
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
                <BookOpen className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
            >
              <a href="/timeline-format">
                Join the Hackathon Virtually
                <Video className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Prize Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 text-center"
        >
          <Card className="p-6 bg-white/10 border-white/20">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-white">
                ₦60M
              </Heading>
              <Body weight="semibold" className="text-white">
                Total Cash Prize Pool
              </Body>
              <Body size="sm" className="text-white/70">
                Distributed among Top 10 Teams
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/10 border-white/20">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-white">
                10+
              </Heading>
              <Body weight="semibold" className="text-white">
                Thematic Awards
              </Body>
              <Body size="sm" className="text-white/70">
                Recognition Across Innovation Themes
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/10 border-white/20">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-white">
                Continental
              </Heading>
              <Body weight="semibold" className="text-white">
                Recognition & Impact
              </Body>
              <Body size="sm" className="text-white/70">
                Across AfCFTA, ECOWAS, and Partners
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Final Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white/10 border border-white/20 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Trophy className="size-16 mx-auto text-white" />
            <Heading
              as="h3"
              level="h4"
              className="text-white"
            >
              Shape Africa&apos;s Digital Trade Future
            </Heading>
            <Body className="max-w-2xl mx-auto text-white/90">
              Beyond the substantial rewards, you&apos;ll be part of a movement
              that&apos;s transforming how Africa trades, connects, and prospers. The
              impact of your solution could benefit millions across the
              continent.
            </Body>
            <Body size="sm" className="text-white/70">
              Join innovators, developers, and entrepreneurs building technology-driven 
              trade solutions that accelerate Africa&apos;s digital transformation.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
