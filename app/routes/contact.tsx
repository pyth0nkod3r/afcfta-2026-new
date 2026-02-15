import type { Route } from "./+types/contact";
import { ContactPage } from "~/components/contact/ContactPage";

export const meta: Route.MetaFunction = () => [
  { title: "Contact Us — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Get in touch with the AfCFTA Hackathon team. Contact us for general inquiries, technical support, or media relations.",
  },
];

export default function Contact() {
  return <ContactPage />;
}
