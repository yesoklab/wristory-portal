import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Vercel 빌드 시 API_KEY가 비어있을 경우를 대비해 빈 문자열 폴백 추가
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'global': 'window', // 테조스 지갑 라이브러리 오류 방지용
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
