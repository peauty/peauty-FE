import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // SVG를 아이콘으로 변환
      },
    }),
  ],
});
