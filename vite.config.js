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
        manualChunks(id) {
          // Split antd into its own chunk
          if (id.includes("node_modules/antd")) {
            return "antd";
          }
          // Split antd dependencies
          if (id.includes("node_modules/@ant-design")) {
            return "ant-design";
          }
          if (id.includes("node_modules/rc-")) {
            return "rc-components";
          }
          if (id.includes("node_modules/react-dom")) {
            return "react-dom";
          }
          if (id.includes("node_modules/react")) {
            return "react";
          }
          if (
            id.includes("node_modules/@reduxjs") ||
            id.includes("node_modules/react-redux")
          ) {
            return "redux";
          }
          if (
            id.includes("node_modules/react-router-dom") ||
            id.includes("node_modules/react-router")
          ) {
            return "router";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
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
