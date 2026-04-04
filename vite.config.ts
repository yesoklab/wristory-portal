import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    'process.env': {},
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'global': 'globalThis',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})
