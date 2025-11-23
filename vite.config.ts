import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/Portfolio/',
  define: {
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});