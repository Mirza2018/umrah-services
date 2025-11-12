// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ---- SERVER SETTINGS ----------------------------------------------------
  server: {
    host: true, // expose on network (docker, WSL, etc.)
    port: 5174, // your chosen port
    strictPort: true, // fail if port is taken, don’t auto-increment

    // Prevent HMR overlay from hiding the real error (optional)
    hmr: {
      overlay: true, // keep it on – we’ll fix the cause instead
    },

    // Explicitly deny the .git folder (works for dev & preview)
    fs: {
      // Allow only the project root and parent dirs you really need
      allow: [".."],
      // Block .git completely – Vite will never try to read it
      deny: [".git", ".env", "**/.env.*", ".*.log"],
    },
  },

  // ---- BUILD SETTINGS ----------------------------------------------------
  build: {
    // Tell Rollup to treat anything matching .git as external (never bundled)
    rollupOptions: {
      external: (id) => id.includes(".git"),
    },
  },

  // ---- OPTIONAL: CLEAN CONSOLE ON REBUILD ---------------------------------
  clearScreen: true,
});
