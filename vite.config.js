import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200
  },
  preview: {
    port: 4200
  },
  optimizeDeps: {
    include: ["dayjs"]
  },
  resolve: {
    alias: {
      src: "/src"
    }
  }
});
