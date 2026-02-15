
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Vercel 빌드 시 API_KEY가 비어있을 경우를 대비해 빈 문자열 폴백 추가
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
