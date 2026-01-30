import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 깃허브 페이지 배포 시 '아이디.github.io/레포이름/' 경로를 인식하기 위해 base를 './'로 설정합니다.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
