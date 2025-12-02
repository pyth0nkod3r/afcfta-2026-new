import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

// Main domain routes (www.afcfta-2026.com)
const mainRoutes: RouteConfig = [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/challenge-tracks", "routes/challenge-tracks.tsx"),
  route("/timeline-format", "routes/timeline-format.tsx"),
  route("/rewards-incentives", "routes/rewards-incentives.tsx"),
  route("/register", "routes/register.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/venue", "routes/venue.tsx"),
  route("/partners", "routes/partners.tsx"),
  route("/media-resources", "routes/media-resources.tsx"),
  route("/faq", "routes/faq.tsx"),
  route("/terms", "routes/terms.tsx"),
  route("/privacy", "routes/privacy.tsx"),
];

// Portal subdomain routes (portal.afcfta-2026.com)
const portalRoutes: RouteConfig = [
  index("routes/portal/index.tsx"),
  route("/assessment", "routes/portal/assessment.tsx"),
  route("/results", "routes/portal/results.tsx"),
  route("/register", "routes/portal/register.tsx"),
  route("/login", "routes/portal/login.tsx"),
  route("/dashboard", "routes/portal/dashboard.tsx"),
  route("/profile", "routes/portal/profile.tsx"),
  route("/settings", "routes/portal/settings.tsx"),
];

// Determine which routes to use based on subdomain
// In production, this is handled by the server based on the hostname
// For development, you can use portal.localhost:5173
const isPortalSubdomain = () => {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname;
  
  // Development: portal.localhost
  if (hostname.startsWith("portal.localhost")) return true;
  
  // Production: portal.afcfta-2026.com
  if (hostname.startsWith("portal.")) return true;
  
  return false;
};

// Export appropriate routes based on subdomain
// Note: In SSR, subdomain detection should happen server-side
export default [
  ...(typeof window !== "undefined" && isPortalSubdomain() ? portalRoutes : mainRoutes),
  // 404 catch-all route
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
