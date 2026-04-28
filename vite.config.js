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
          // ✅ Keep react + react-dom + react-redux TOGETHER
          // so useSyncExternalStore is always available
          "react-vendor": [
            "react",
            "react-dom",
            "react-redux",
            "react-router-dom",
          ],
          "redux-vendor": ["@reduxjs/toolkit", "redux-persist"],
          "antd-vendor": ["antd", "@ant-design/icons"],
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
