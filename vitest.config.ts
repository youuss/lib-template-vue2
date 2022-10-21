import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.mjs',
    },
  },
  test: {
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['./script/test/setup.ts'],
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    environment: 'jsdom',
    clearMocks: true,
    coverage: {
      reporter: ['json', 'html'],
    },
  },
}));
