import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "~/components/ui/toaster";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingActionButton } from "~/components/ui/floating-action-button";
import { ScrollProgress } from "~/components/ui/progress-indicator";
import { AnimationProvider } from "~/contexts/animation-context";
import { PortalAuthProvider } from "~/contexts/PortalAuthContext";

import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

const queryClient = new QueryClient();

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <QueryClientProvider client={queryClient}>
          <AnimationProvider>
            <PortalAuthProvider>
              <TooltipProvider>
                <ScrollProgress />
                <Header />
                <main className="flex-1 pt-16 md:pt-20">{children}</main>
                <Footer />
                <FloatingActionButton />
                <Toaster />
                <Sonner />
                <ScrollRestoration />
                <Scripts />
              </TooltipProvider>
            </PortalAuthProvider>
          </AnimationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
          opacity: { duration: 0.3 },
          scale: { duration: 0.5 },
          y: { duration: 0.4 },
        }}
        style={{
          willChange: "transform, opacity", // Optimize for animations
        }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
