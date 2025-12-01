import { Section } from "../ui/section";
import { Button } from "../ui/button";
import { Rocket, BookOpen, Video } from "lucide-react";
import { Link } from "react-router";

export function WhyAfcftaCallToAction() {
  return (
    <Section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the AfCFTA Hackathon 2026
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Be part of Africa&apos;s digital transformation. Collaborate, innovate,
              and make history.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold min-w-[200px]"
            >
              <Link to="/portal/register">
                <Rocket className="mr-2 h-5 w-5" />
                Register Now
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 min-w-[200px]"
            >
              <a href="#" download>
                <BookOpen className="mr-2 h-5 w-5" />
                Download Guide
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 min-w-[200px]"
            >
              <Link to="/portal">
                <Video className="mr-2 h-5 w-5" />
                Join Virtually
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="font-medium">#AfCFTAHackathon2026</span>
              <span>•</span>
              <span className="font-medium">#DigitalTradeAfrica</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
