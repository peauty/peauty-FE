import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0", // 모든 네트워크 인터페이스에서 접속을 허용
    port: 5173, // 포트 번호 (기본값)
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
