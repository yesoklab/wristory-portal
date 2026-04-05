import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || ''),
      'global': 'window',
      'process.env': '{}',
      'process.browser': 'true',
      'process.version': '""',
    },
    plugins: [
      react(),
      tailwindcss(),
      nodePolyfills({ include: ['crypto', 'stream', 'util', 'buffer'] }),
    ],
    server: { port: 3000, host: '0.0.0.0' },
  };
});
