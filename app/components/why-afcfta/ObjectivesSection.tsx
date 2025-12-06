import { Section } from "../ui/section";
import { Card, CardContent } from "../ui/card";
import { Lightbulb, Globe, Briefcase, Users } from "lucide-react";

const objectives = [
  {
    icon: Lightbulb,
    title: "Inspire Digital Innovation",
    description: "Turn AfCFTA's trade goals into working digital products.",
  },
  {
    icon: Globe,
    title: "Build a Connected Africa",
    description: "Create solutions that enable borderless digital commerce.",
  },
  {
    icon: Briefcase,
    title: "Empower MSMEs",
    description: "Strengthen SME access to markets, finance, and technology.",
  },
  {
    icon: Users,
    title: "Foster Collaboration",
    description: "Unite innovators, policymakers, and investors across Africa.",
  },
];

export function ObjectivesSection() {
  return (
    <Section
      background="muted"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Objectives of the Hackathon
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/60 border-white/40"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {objective.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
