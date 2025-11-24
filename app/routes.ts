import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/challenge-tracks", "routes/challenge-tracks.tsx"),
  
  // Portal routes
  route("/portal", "routes/portal-index.tsx"),
  route("/portal/assessment", "routes/portal-assessment.tsx"),
  route("/portal/results", "routes/portal-results.tsx"),
  route("/portal/register", "routes/portal-register.tsx"),
] satisfies RouteConfig;
