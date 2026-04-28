// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    strictPort: true,
    hmr: {
      overlay: true,
    },
    fs: {
      allow: [".."],
      deny: [".git", ".env", "**/.env.*", ".*.log"],
    },
  },

  build: {
    minify: "esbuild", // ✅ make sure esbuild is used

    esbuild: {
      drop: ["console", "debugger"], // 🔥 THIS is the key
    },

    rollupOptions: {
      external: (id) => id.includes(".git"),
    },
  },

  clearScreen: true,
});
