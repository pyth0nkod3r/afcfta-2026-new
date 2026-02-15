import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "~/lib/utils";
import {
  dropdownVariants,
  mobileMenuVariants,
  easings,
  durations,
} from "~/lib/animations";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/challenge-tracks", label: "Challenge Tracks" },
  { href: "/timeline-format", label: "Timeline & Format" },
  { href: "/rewards-incentives", label: "Rewards & Incentives" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
  {
    href: "#",
    label: "More",
    children: [
      { href: "/venue", label: "Venue" },
      { href: "/partners", label: "Partners" },
      { href: "/media-resources", label: "Media & Resources" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

const forcedOverflow = [
  "/venue",
  "/media-resources",
  "/faq",
  "/partners",
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
      let available = container.clientWidth;
      let used = 0;
      let reservedMore = false;

      const nextOverflow: string[] = [];

      // First, ensure room for the More button if we are forcing overflow.
      if (forcedOverflow.length > 0) {
        reservedMore = true;
        available -= rawMoreWidth;
      }

      itemWidths.forEach((item) => {
        if (!item.key) return;
        const widthWithGap = item.width + (used > 0 ? gap : 0);

        // These items always go under More
        if (forcedOverflow.includes(item.key)) {
          nextOverflow.push(item.key);
          return;
        }

        if (!reservedMore && used + widthWithGap > available) {
          reservedMore = true;
          available -= rawMoreWidth + (used > 0 ? gap : 0);
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
                    aria-expanded="false"
                    aria-controls={`submenu-${link.href.replace(/[^\w]/g, "-")}`}
                    onClick={() => toggleSection(link.href)}
                    className="rounded-md p-1 text-gray-600 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    {...(expanded && { "aria-expanded": "true" })}
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

              <AnimatePresence>
                {hasChildren && expanded && (
                  <motion.div
                    id={`submenu-${link.href.replace(/[^\w]/g, "-")}`}
                    className="flex flex-col gap-2 border-l border-surface pl-4 text-sm overflow-hidden"
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {link.children!.map((child, index) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: durations.fast,
                          ease: easings.smooth,
                        }}
                      >
                        <Link
                          to={child.href}
                          onClick={onLinkClick}
                          className="text-gray-700 transition-colors hover:text-primary block"
                        >
                          {child.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    );
  }

  const visibleLinks = navLinks.filter(
    (link) =>
      !overflowKeys.includes(link.href) && !forcedOverflow.includes(link.href),
  );
  const hiddenLinks = navLinks.filter(
    (link) =>
      overflowKeys.includes(link.href) || forcedOverflow.includes(link.href),
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
              <div className="pointer-events-none absolute right-2 top-full hidden min-w-[220px] max-w-[95vw] pt-2 group-hover:pointer-events-auto group-hover:block group-focus-within:block z-30">
                <motion.div
                  className="flex flex-col rounded-md border border-surface bg-white py-2 shadow-lg"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {link.children!.map((child, index) => (
                    <motion.div
                      key={child.href}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: durations.fast,
                        ease: easings.smooth,
                      }}
                    >
                      <Link
                        to={child.href}
                        onClick={onLinkClick}
                        className="whitespace-normal px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 block"
                      >
                        {child.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
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
          <div className="pointer-events-none absolute left-auto right-4 top-full hidden min-w-[220px] max-w-[95vw] pt-2 group-hover:pointer-events-auto group-hover:block group-focus-within:block z-30">
            <motion.div
              className="flex flex-col rounded-md border border-surface bg-white py-2 shadow-lg"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {hiddenLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: durations.fast,
                    ease: easings.smooth,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={onLinkClick}
                    className="whitespace-normal px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
