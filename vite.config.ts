import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import vueJsx from '@vitejs/plugin-vue2-jsx';

export default defineConfig({
  build: {
    lib: {
      name: 'vue2-components-lib',
      entry: 'lib/index.ts',
    },
    rollupOptions: {
      external: ['vue', 'element-ui'],
    },
  },
  server: { port: 8513 },
  plugins: [vue(), vueJsx()],
});
