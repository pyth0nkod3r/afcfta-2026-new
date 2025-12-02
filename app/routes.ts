import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
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

  // Portal routes
  route("/portal", "routes/portal-index.tsx"),
  route("/portal/assessment", "routes/portal-assessment.tsx"),
  route("/portal/results", "routes/portal-results.tsx"),
  route("/portal/register", "routes/portal-register.tsx"),
  route("/portal/login", "routes/portal-login.tsx"),
  route("/portal/dashboard", "routes/portal-dashboard.tsx"),
  route("/portal/profile", "routes/portal-profile.tsx"),
  route("/portal/settings", "routes/portal-settings.tsx"),

  // 404 catch-all route
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
