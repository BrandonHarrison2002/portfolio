import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "portfolio" below with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  root: ".",
  publicDir: "public",
});
