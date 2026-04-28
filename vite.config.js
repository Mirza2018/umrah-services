import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["ios >= 13", "safari >= 13"],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],

  esbuild: {
    drop: ["console", "debugger"], // ✅ moved to top-level
  },

  build: {
    minify: "esbuild",
    rollupOptions: {
      external: (id) => id.includes(".git"),
    },
      output: {
      manualChunks: {
        vendor: ["react", "react-dom", "react-router-dom"],
        redux: ["@reduxjs/toolkit", "react-redux"],
        antd: ["antd"],
      },
  },

  server: {
    host: true,
    strictPort: true,
    hmr: { overlay: true },
    fs: {
      allow: [".."],
      deny: [".git", ".env", "**/.env.*", ".*.log"],
    },
  },
});
