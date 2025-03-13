import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.svg'],
  },
});
