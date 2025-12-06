import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  UserPlus,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Apply Online",
    description:
      "Complete the support application form with your organization's details and support interests.",
    icon: FileText,
  },
  {
    step: "2",
    title: "Choose Your Tier",
    description:
      "Select the support tier that matches your organization's goals and capabilities.",
    icon: UserPlus,
  },
  {
    step: "3",
    title: "Collaborate",
    description:
      "Work with the Nigerian Coordination Office and African innovators to maximize impact.",
    icon: Mail,
  },
];

export function BecomePartner() {
  return (
    <Section id="become-partner" background="muted" spacing="lg" className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 text-black">
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
            className="text-black"
          >
            📝 Join Us in Shaping Africa&apos;s Digital Trade Future
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            Partners are essential to Africa&apos;s cross-border digital trade innovation. Whether you&apos;re a corporate, innovation hub, government agency, or development institution, there&apos;s a support opportunity that matches your goals.
          </Body>
        </motion.div>

        {/* Application Process */}
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
              className="text-black"
            >
              How to Become a Partner
            </Heading>
            <Body color="default" className="mt-2 text-black/70">
              Simple steps to join the AfCFTA Hackathon 2026
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow bg-white/60 border-white/40">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-8 text-blue-700" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-8 h-8 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-black"
                        >
                          {step.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-black/80"
                        >
                          {step.description}
                        </Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              variant="default"
              size="lg"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/register">
                Register Now
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="mailto:support@afcfta-hackathon.org">
                <Mail className="size-4" />
                Contact Support Team
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
