import type { Route } from "./+types/register";
import { RegisterPage } from "~/components/register/RegisterPage";

export const meta: Route.MetaFunction = () => [
  { title: "Register — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Join the AfCFTA Hackathon 2026. Register as a team participant, mentor, or partner to shape Africa's digital trade future.",
  },
];

export default function Register() {
  return <RegisterPage />;
}
