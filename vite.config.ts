import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite configuration for GitHub Pages deployment under /mcocv/
export default defineConfig({
  plugins: [react()],
  base: "/mcocv/",
});
