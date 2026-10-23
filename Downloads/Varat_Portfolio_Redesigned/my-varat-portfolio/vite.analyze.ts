import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "size-report",
      generateBundle(_options, bundle) {
        const groups: Record<string, number> = {};
        for (const file of Object.values(bundle)) {
          if (file.type !== "chunk") continue;
          for (const moduleId of Object.keys(file.modules)) {
            const m = moduleId.replace(/\\/g, "/");
            const nm = m.match(/node_modules\/framer-motion\/dist\/es\/(.*)$/);
            let key = "other";
            if (nm) {
              const parts = nm[1].split("/");
              key = "fm:" + (parts.length > 1 ? parts[0] : "root");
            } else {
              const n2 = m.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/);
              if (n2) key = n2[1];
              else key = "src";
            }
            groups[key] = (groups[key] ?? 0) + (file.modules[moduleId].renderedLength ?? 0);
          }
        }
        console.log("\n=== module bytes by package ===");
        for (const [k, v] of Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 25)) {
          console.log(`${(v / 1024).toFixed(1).padStart(8)} KB  ${k}`);
        }
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
