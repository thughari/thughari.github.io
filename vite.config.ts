import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/',
  define: {
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});