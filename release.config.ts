import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import generateGlobalTs from './generateGlobalTs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: './dist',
      rollupTypes: true,
      include: ['src/**/*', 'src/**/*.vue'],
      pathsToAliases: true
    }),
    (generateGlobalTs as any)()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/release.ts', import.meta.url)), //指定组件编译入口文件
      name: 'elin-ui', // 包名
      fileName: 'elin-ui' // 打包文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
    // sourcemap: true
  }
})
