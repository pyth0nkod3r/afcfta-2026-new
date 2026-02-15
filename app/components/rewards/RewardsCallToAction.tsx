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
    <Section background="muted" spacing="lg" className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200">
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
            <Heading as="h2" level="h2" className="text-black">
              Your Innovation Deserves Continental Recognition
            </Heading>
            <Body size="lg" className="max-w-3xl mx-auto text-black">
              Compete, collaborate, and create solutions that redefine trade in 
              Africa. The next big idea could be yours.
            </Body>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="default"
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
              className="inline-flex items-center gap-2 border-black/20 text-black hover:bg-black/10"
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
              className="inline-flex items-center gap-2 border-black/20 text-black hover:bg-black/10"
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
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-black">
                ₦60M
              </Heading>
              <Body weight="semibold" className="text-black">
                Total Cash Prize Pool
              </Body>
              <Body size="sm" className="text-black">
                Distributed among Top 10 Teams
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-black">
                10+
              </Heading>
              <Body weight="semibold" className="text-black">
                Thematic Awards
              </Body>
              <Body size="sm" className="text-black">
                Recognition Across Innovation Themes
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Heading as="h3" level="h3" className="text-black">
                Continental
              </Heading>
              <Body weight="semibold" className="text-black">
                Recognition & Impact
              </Body>
              <Body size="sm" className="text-black">
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
          className="text-center bg-white/60 border border-white/40 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Trophy className="size-16 mx-auto text-blue-700" />
            <Heading
              as="h3"
              level="h4"
              className="text-black"
            >
              Shape Africa&apos;s Digital Trade Future
            </Heading>
            <Body className="max-w-2xl mx-auto text-black">
              Beyond the substantial rewards, you&apos;ll be part of a movement
              that&apos;s transforming how Africa trades, connects, and prospers. The
              impact of your solution could benefit millions across the
              continent.
            </Body>
            <Body size="sm" className="text-black">
              Join innovators, developers, and entrepreneurs building technology-driven 
              trade solutions that accelerate Africa&apos;s digital transformation.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
