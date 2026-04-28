import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  esbuild: {
    drop: ["console", "debugger"],
    target: "es2015",
  },

  build: {
    minify: "esbuild",
    target: "es2015",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          redux: ["@reduxjs/toolkit", "react-redux"],
          antd: ["antd"],
        },
      },
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
