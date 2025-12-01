import { Section } from "../ui/section";
import { Card, CardContent } from "../ui/card";
import { Truck, CreditCard, Brain, Shield, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Truck,
    title: "Digital Trade Facilitation",
    description: "Streamlining customs, logistics, and cross-border commerce.",
  },
  {
    icon: CreditCard,
    title: "Fintech & Digital Payments",
    description: "Enabling secure, low-cost financial connectivity.",
  },
  {
    icon: Brain,
    title: "AI & Data for Trade Intelligence",
    description: "Powering smarter trade policies and market insights.",
  },
  {
    icon: Shield,
    title: "Digital Identity & Trust Frameworks",
    description: "Ensuring secure, interoperable cross-border systems.",
  },
  {
    icon: Rocket,
    title: "Innovation Ecosystem Development",
    description:
      "Empowering Africa's youth and startups through collaboration.",
  },
];

export function DigitalTradeProtocolSection() {
  return (
    <Section className="py-16 md:py-24 bg-black!">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white! mb-6">
              Alignment with AfCFTA Digital Trade Protocol
            </h2>
            <p className="text-xl text-white! max-w-3xl mx-auto">
              The Hackathon directly supports the implementation of the AfCFTA
              Digital Trade Protocol, focusing on five key pillars:
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 bg-gray-50! border-white/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900! mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-gray-900! leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-3xl font-bold text-blue-200">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
