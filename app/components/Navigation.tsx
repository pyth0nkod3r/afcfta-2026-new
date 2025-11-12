import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/challenge-tracks", label: "Challenge Tracks" },
  { href: "/rewards", label: "Rewards" },
  { href: "/timeline", label: "Timeline" },
  { href: "/venue", label: "Venue" },
  { href: "/partners", label: "Partners" },
  { href: "/why-afcfta", label: "Why AfCFTA" },
  { href: "/faq", label: "FAQ" },
];

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navLinks.map((link) => {
        const isActive = currentPath === link.href || 
          (link.href !== "/" && currentPath.startsWith(link.href));
        
        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onLinkClick}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              "hover:bg-surface hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isActive
                ? "bg-surface text-primary font-semibold"
                : "text-gray-700"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}