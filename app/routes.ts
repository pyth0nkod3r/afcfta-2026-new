import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("/register", "routes/register.tsx"),

  // Main domain unique routes
  route("/about", "routes/about.tsx"),
  route("/challenge-tracks", "routes/challenge-tracks.tsx"),
  route("/timeline-format", "routes/timeline-format.tsx"),
  route("/rewards-incentives", "routes/rewards-incentives.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/venue", "routes/venue.tsx"),
  route("/partners", "routes/partners.tsx"),
  route("/media-resources", "routes/media-resources.tsx"),
  route("/faq", "routes/faq.tsx"),
  route("/terms", "routes/terms.tsx"),
  route("/privacy", "routes/privacy.tsx"),

  // 404 catch-all route
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;

