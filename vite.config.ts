import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your repo name (from package.json "name")
export default defineConfig({
  base: '/hari-thatikonda-portfolio/',
  plugins: [react()],
});