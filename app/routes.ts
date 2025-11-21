import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/challenge-tracks", "routes/challenge-tracks.tsx"),
] satisfies RouteConfig;
