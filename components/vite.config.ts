import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import federation from "@originjs/vite-plugin-federation";
import copy from "rollup-plugin-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "component",
      filename: "components.js",
      exposes: {
        "./Button": "./src/components/ui/button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    copy({
      targets: [{ src: "public/_headers", dest: "dist" }],
      hook: "writeBundle",
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
    strictPort: true,
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
