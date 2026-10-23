import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          const moduleId = id.replace(/\\/g, "/");

          if (
            moduleId.includes("/node_modules/react/") ||
            moduleId.includes("/node_modules/react-dom/") ||
            moduleId.includes("/node_modules/scheduler/")
          ) {
            return "react-vendor";
          }

          if (
            moduleId.includes("/node_modules/framer-motion/") ||
            moduleId.includes("/node_modules/motion-dom/") ||
            moduleId.includes("/node_modules/motion-utils/")
          ) {
            return "motion";
          }

          if (moduleId.includes("/node_modules/@radix-ui/")) {
            return "radix";
          }

          if (
            moduleId.includes("/node_modules/react-hook-form/") ||
            moduleId.includes("/node_modules/@hookform/") ||
            moduleId.includes("/node_modules/zod/")
          ) {
            return "forms";
          }

          if (
            moduleId.includes("/node_modules/sonner/") ||
            moduleId.includes("/node_modules/lucide-react/") ||
            moduleId.includes("/node_modules/react-icons/")
          ) {
            return "ui-vendor";
          }

          if (moduleId.includes("/node_modules/lenis/")) {
            return "scroll";
          }

          return "vendor";
        },
      },
    },
  },
});
