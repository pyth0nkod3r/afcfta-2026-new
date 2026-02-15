import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url)),
    },
  },
  server: {
    host: true, // Allow access from network
    port: 5173,
    strictPort: false,
    // This allows both localhost and portal.localhost to work
    // You can access: http://localhost:5173 (main site) and http://portal.localhost:5173 (portal)
  },
});
