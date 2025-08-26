import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to https://<user>.github.io/spotify-portfolio/
export default defineConfig({
  base: "/spotify-portfolio/", // <-- set to '/' only for user/organization site
  plugins: [react()],
});
