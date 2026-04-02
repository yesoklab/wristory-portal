import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@theme/v4';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'global': 'window',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
