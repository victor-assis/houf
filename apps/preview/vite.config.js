import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    historyApiFallback: true,
  },
});