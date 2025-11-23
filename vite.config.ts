import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/thughari.github.io/',
  define: {
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});