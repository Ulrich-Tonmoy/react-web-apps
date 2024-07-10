import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/components": resolve(__dirname, "src/components"),
      "@/context": resolve(__dirname, "src/context"),
      "@/libs": resolve(__dirname, "src/libs"),
    },
  },
});
