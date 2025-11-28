import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  Send,
  Calendar,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const applicationSteps = [
  {
    step: "1",
    title: "Submit Application",
    description:
      "Complete our partnership application form with your organization details and partnership interests.",
    icon: FileText,
  },
  {
    step: "2",
    title: "Initial Review",
    description:
      "Our partnerships team reviews your application and assesses alignment with hackathon objectives.",
    icon: CheckCircle,
  },
  {
    step: "3",
    title: "Partnership Discussion",
    description:
      "Schedule a call to discuss partnership opportunities, benefits, and customization options.",
    icon: Phone,
  },
  {
    step: "4",
    title: "Agreement & Onboarding",
    description:
      "Finalize partnership agreement and begin onboarding process with dedicated support.",
    icon: Send,
  },
];

const contactMethods = [
  {
    title: "Partnership Application",
    description: "Submit a formal partnership application",
    icon: FileText,
    action: "Apply Now",
    href: "/assets/partnership-application.pdf",
  },
  {
    title: "Schedule a Call",
    description: "Book a consultation with our partnerships team",
    icon: Calendar,
    action: "Book Meeting",
    href: "mailto:partnerships@afcfta-hackathon.org?subject=Partnership Consultation Request",
  },
  {
    title: "Email Inquiry",
    description: "Send us your questions and requirements",
    icon: Mail,
    action: "Send Email",
    href: "mailto:partnerships@afcfta-hackathon.org",
  },
  {
    title: "Live Chat",
    description: "Chat with our team for immediate assistance",
    icon: MessageSquare,
    action: "Start Chat",
    href: "#chat",
  },
];

export function BecomePartner() {
  return (
    <Section id="become-partner" background="muted" spacing="lg">
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
            Become a Partner
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Ready to join Africa's premier innovation event? Partner with us to
            connect with the continent's brightest minds and shape the future of
            African trade.
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
              className="text-gray-900 dark:text-gray-50"
            >
              Partnership Application Process
            </Heading>
            <Body color="muted" className="mt-2">
              Simple steps to become an AfCFTA Hackathon 2026 partner
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-8 h-8 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
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
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Methods */}
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
              Get Started Today
            </Heading>
            <Body color="muted" className="mt-2">
              Choose your preferred way to begin the partnership conversation
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
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
                          {method.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {method.description}
                        </Body>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        <a
                          href={method.href}
                          className="inline-flex items-center gap-2"
                        >
                          {method.action}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-primary text-white rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Heading as="h3" level="h3" className="text-white">
                Ready to Shape Africa's Digital Future?
              </Heading>
              <Body className="max-w-2xl mx-auto text-white/90">
                Join us in creating the largest innovation event in Africa.
                Partner with AfCFTA Hackathon 2026 and be part of the
                continental transformation.
              </Body>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/assets/partnership-application.pdf" download>
                  Apply for Partnership
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <a href="mailto:partnerships@afcfta-hackathon.org">
                  <Mail className="size-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
