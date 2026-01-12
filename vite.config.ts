import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 关键配置：将绝对路径 '/' 改为相对路径 './'
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  }
});