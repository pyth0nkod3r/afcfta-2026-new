import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Section } from "~/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Users, UserCheck, Building } from "lucide-react";

const registrationTypes = [
  {
    icon: Users,
    title: "Participant Registration",
    description: "Join as a team member or individual participant",
    link: "/portal/register",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Mentor Signup",
    description: "Guide and support hackathon teams",
    link: "/portal/register?type=mentor",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Building,
    title: "Partner Registration",
    description: "Become a strategic partner or sponsor",
    link: "/partners",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Register() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the AfCFTA Hackathon 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your registration type and be part of Africa's digital
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {registrationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div
                      className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${type.color}`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{type.description}</p>
                    <Button asChild className="w-full">
                      <Link to={type.link}>Register Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need more information before registering?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/faq">View FAQs</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/timeline-format">Event Timeline</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/challenge-tracks">Challenge Tracks</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
