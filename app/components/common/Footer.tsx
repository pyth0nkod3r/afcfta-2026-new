import { Link } from "react-router";
import { cn } from "~/lib/utils";

const footerLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/challenge-tracks", label: "Challenge Tracks" },
    { href: "/rewards", label: "Rewards" },
    { href: "/timeline", label: "Timeline" },
    { href: "/venue", label: "Venue" },
    { href: "/partners", label: "Partners" },
    { href: "/why-afcfta", label: "Why AfCFTA" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white mt-auto">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10 xl:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/afcfta-logo.jpg"
                alt="Nigeria AfCFTA Coordination Office"
                className="h-12 w-auto" // Adjust size as needed
                style={{ borderRadius: "50%" }} // Optional
              />
              <span className="sr-only">AfCFTA 2026 Footer Home</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering African innovation through technology and
              collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Partners
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-400 mb-4">
                Proudly supported by our partners
              </p>
              {/* Partner Logo Placeholders */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-video bg-gray-800 rounded-md",
                      "flex items-center justify-center",
                      "border border-gray-700",
                      "hover:border-secondary/50 transition-colors",
                    )}
                  >
                    <span className="text-xs text-gray-500">Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} AfCFTA Hackathon. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-secondary transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-secondary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
