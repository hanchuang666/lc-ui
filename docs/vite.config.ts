import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve, join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      'lc-ui': resolve(join(__dirname, '../packages/lc-ui/src')),
      '@doc': resolve(__dirname, 'src')
    }
  }
})