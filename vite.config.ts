import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If deploying to https://<user>.github.io/ambar-bose-portfolio/
export default defineConfig({
  base: '/ambar-bose-portfolio/', // <-- set to '/' only for user/organization site
  plugins: [react()],
});
