import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/why-the-hackathon", label: "Why the Hackathon" },
      { href: "/about/format", label: "Format (Hybrid: Physical + Virtual)" },
      { href: "/about/venue-dates", label: "Venue & Dates" },
    ],
  },
  {
    href: "/strategic-plan",
    label: "Strategic Plan",
    children: [
      {
        href: "/strategic-plan/vision-objectives",
        label: "Vision & Objectives",
      },
      { href: "/strategic-plan/pillars", label: "Pillars" },
      {
        href: "/strategic-plan/governance-legal-framework",
        label: "Governance & Legal Framework",
      },
    ],
  },
  {
    href: "/challenge-tracks",
    label: "Challenge Tracks",
    children: [
      { href: "/challenge-tracks", label: "All Tracks" },
      {
        href: "/challenge-tracks/digital-trade-facilitation",
        label: "Digital Trade Facilitation",
      },
      {
        href: "/challenge-tracks/ai-for-trade-intelligence",
        label: "AI for Trade Intelligence",
      },
      {
        href: "/challenge-tracks/fintech-msme-financing",
        label: "FinTech & MSME Financing",
      },
      {
        href: "/challenge-tracks/ecommerce-msme-empowerment",
        label: "E-Commerce & MSME Empowerment",
      },
      {
        href: "/challenge-tracks/smart-logistics-supply-chains",
        label: "Smart Logistics & Supply Chains",
      },
      {
        href: "/challenge-tracks/documentation-compliance-automation",
        label: "Documentation & Compliance Automation",
      },
      {
        href: "/challenge-tracks/sustainable-inclusive-trade",
        label: "Sustainable & Inclusive Trade",
      },
      {
        href: "/challenge-tracks/digital-identity-verification",
        label: "Digital Identity & Verification",
      },
      {
        href: "/challenge-tracks/agriculture-trade-value-chain",
        label: "Agriculture & Trade Value Chain",
      },
      {
        href: "/challenge-tracks/knowledge-learning-ecosystem",
        label: "Knowledge & Learning Ecosystem",
      },
    ],
  },
  {
    href: "/timeline-format",
    label: "Timeline & Format",
    children: [
      { href: "/timeline-format/pre-hackathon", label: "Pre-Hackathon Phase" },
      { href: "/timeline-format/hackathon-days", label: "Hackathon Days" },
      {
        href: "/timeline-format/post-hackathon",
        label: "Post-Hackathon Phase",
      },
      { href: "/timeline-format/schedule", label: "Schedule" },
    ],
  },
  {
    href: "/rewards-incentives",
    label: "Rewards & Incentives",
    children: [
      {
        href: "/rewards-incentives/prize-categories",
        label: "Prize Categories",
      },
      { href: "/rewards-incentives/thematic-awards", label: "Thematic Awards" },
      {
        href: "/rewards-incentives/non-cash-benefits",
        label: "Non-Cash Benefits",
      },
      {
        href: "/rewards-incentives/delivery-integration-framework",
        label: "Delivery & Integration Framework",
      },
    ],
  },
  {
    href: "/partners",
    label: "Partners",
    children: [
      {
        href: "/partners/partnership-tiers",
        label: "Partnership Tiers (Platinum / Diamond / Gold / Silver)",
      },
      { href: "/partners/become-a-partner", label: "Become a Partner" },
    ],
  },
  {
    href: "/media-resources",
    label: "Media & Resources",
    children: [
      { href: "/media-resources/news-updates", label: "News & Updates" },
      { href: "/media-resources/gallery", label: "Gallery" },
      { href: "/media-resources/video-library", label: "Video Library" },
      {
        href: "/media-resources/downloadable-assets",
        label: "Downloadable Assets (Brochure, Whitepaper)",
      },
    ],
  },
  {
    href: "/register",
    label: "Register / Apply",
    children: [
      { href: "/register/participants", label: "Participant Registration" },
      { href: "/register/mentors", label: "Mentor Signup" },
      { href: "/register/partners", label: "Partner Signup" },
    ],
  },
  {
    href: "/faqs",
    label: "FAQs",
    children: [
      { href: "/faqs", label: "Frequently Asked Questions" },
      { href: "/faqs/terms", label: "Terms & Conditions" },
      { href: "/faqs/privacy", label: "Privacy Policy" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/contact#form", label: "Contact Form" },
      { href: "/contact#location", label: "Office Address & Map" },
      { href: "/contact#social", label: "Social Media Links" },
    ],
  },
];

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
  variant?: "desktop" | "mobile";
}

type ItemWidth = { key: string; width: number };

const arraysEqual = (a: string[], b: string[]) =>
  a.length === b.length && a.every((value, index) => value === b[index]);

export function Navigation({
  className,
  onLinkClick,
  variant = "desktop",
}: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [itemWidths, setItemWidths] = useState<ItemWidth[]>([]);
  const [overflowKeys, setOverflowKeys] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const toggleSection = (href: string) => {
    setOpenSections((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const isActive = (href: string) =>
    currentPath === href || (href !== "/" && currentPath.startsWith(href));

  useEffect(() => {
    if (variant !== "desktop") {
      setOverflowKeys([]);
    }
  }, [variant]);

  useLayoutEffect(() => {
    if (variant !== "desktop") return;
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const collectWidths = () => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-nav-role='item']"),
      );
      if (!items.length) return;

      const widths = items.map((item) => ({
        key: item.dataset.navKey ?? "",
        width: item.getBoundingClientRect().width,
      }));

      setItemWidths((prev) => {
        if (
          prev.length === widths.length &&
          prev.every((entry, index) => {
            const candidate = widths[index];
            return (
              entry.key === candidate.key &&
              Math.abs(entry.width - candidate.width) < 1
            );
          })
        ) {
          return prev;
        }
        return widths;
      });
    };

    collectWidths();
  }, [variant]);

  useLayoutEffect(() => {
    if (variant !== "desktop") return;
    if (typeof window === "undefined") return;
    if (!itemWidths.length) return;

    const container = containerRef.current;
    if (!container) return;

    const computeOverflow = () => {
      const style = window.getComputedStyle(container);
      const gap = parseFloat(style.columnGap || "0");
      const rawMoreWidth = moreRef.current?.getBoundingClientRect().width ?? 0;
      const moreWidth = hiddenLinks.length > 0 ? rawMoreWidth : 0;
      let available = container.clientWidth;
      let used = 0;
      let reservedMore = false;
      const nextOverflow: string[] = [];

      itemWidths.forEach((item) => {
        if (!item.key) return;
        const widthWithGap = item.width + (used > 0 ? gap : 0);

        if (!reservedMore && used + widthWithGap > available) {
          reservedMore = true;
          available -= moreWidth + (used > 0 ? gap : 0);
        }

        if (used + widthWithGap > available) {
          nextOverflow.push(item.key);
        } else {
          used += widthWithGap;
        }
      });

      setOverflowKeys((prev) =>
        arraysEqual(prev, nextOverflow) ? prev : nextOverflow,
      );
    };

    computeOverflow();

    const handleResize = () => computeOverflow();

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [variant, itemWidths]);

  if (variant === "mobile") {
    return (
      <nav className={cn("flex flex-col gap-3", className)}>
        {navLinks.map((link) => {
          const hasChildren = Boolean(link.children?.length);
          const expanded = openSections[link.href];
          return (
            <div key={link.href} className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <Link
                  to={link.href}
                  onClick={onLinkClick}
                  className={cn(
                    "flex-1 text-base font-medium transition-colors",
                    "hover:text-primary",
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "text-gray-800",
                  )}
                >
                  {link.label}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`submenu-${link.href.replace(/[^\w]/g, "-")}`}
                    onClick={() => toggleSection(link.href)}
                    className="rounded-md p-1 text-gray-600 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                )}
              </div>

              {hasChildren && expanded && (
                <div
                  id={`submenu-${link.href.replace(/[^\w]/g, "-")}`}
                  className="flex flex-col gap-2 border-l border-surface pl-4 text-sm"
                >
                  {link.children!.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onLinkClick}
                      className="text-gray-700 transition-colors hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );
  }

  const visibleLinks = navLinks.filter(
    (link) => !overflowKeys.includes(link.href),
  );
  const hiddenLinks = navLinks.filter((link) =>
    overflowKeys.includes(link.href),
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center gap-2 overflow-visible",
        className,
      )}
    >
      {visibleLinks.map((link) => {
        const hasChildren = Boolean(link.children?.length);

        return (
          <div
            key={link.href}
            data-nav-role="item"
            data-nav-key={link.href}
            className="relative shrink-0 group"
          >
            <Link
              to={link.href}
              onClick={onLinkClick}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-surface hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isActive(link.href)
                  ? "bg-surface text-primary font-semibold"
                  : "text-gray-700",
              )}
            >
              {link.label}
              {hasChildren && <ChevronDown className="size-4 text-gray-500" />}
            </Link>
            {hasChildren && (
              <div className="pointer-events-none absolute left-0 top-full hidden min-w-[240px] pt-2 group-hover:pointer-events-auto group-hover:block group-focus-within:block z-30">
                <div className="flex flex-col rounded-md border border-surface bg-white py-2 shadow-lg transition">
                  {link.children!.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onLinkClick}
                      className="whitespace-normal px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div
        ref={moreRef}
        data-nav-role="more"
        className={cn(
          "group relative shrink-0 transition-opacity duration-150",
          hiddenLinks.length
            ? "flex opacity-100"
            : "flex opacity-0 invisible pointer-events-none",
        )}
      >
        <button
          type="button"
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          More
          <ChevronDown className="size-4 text-gray-500" />
        </button>

        {hiddenLinks.length > 0 && (
          <div className="pointer-events-none absolute left-0 top-full hidden min-w-[220px] pt-2 group-hover:pointer-events-auto group-hover:block group-focus-within:block z-30">
            <div className="flex flex-col rounded-md border border-surface bg-white py-2 shadow-lg transition">
              {hiddenLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onLinkClick}
                  className="whitespace-normal px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
