import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Section } from "~/components/ui/section";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Visual */}
          <div className="space-y-4">
            <div className="text-8xl md:text-9xl font-bold text-gray-200">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[160px]"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/challenge-tracks"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Challenge Tracks
              </Link>
              <Link
                to="/timeline-format"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Timeline & Format
              </Link>
              <Link
                to="/rewards-incentives"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Rewards & Incentives
              </Link>
              <Link
                to="/faq"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                FAQs
              </Link>
              <Link
                to="/partners"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
