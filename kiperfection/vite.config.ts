import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // Configura o alias "@" para a pasta "src"
      { find: '@', replacement: '/src' },
    ],
  },
  plugins: [react()],
  build: {
    outDir: 'dist',  // Diretório de saída para o build
    assetsDir: 'assets',  // Diretório de arquivos estáticos
  },
  base:"/kiperfection"
});
