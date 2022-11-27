import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `/src/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      dts: './types/typed-router.d.ts',
      importMode: 'async',
    }),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
        VueRouterAutoImports
      ]
    }), 
    Components({
      version: 3,
      dts: './types/components.d.ts',
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: [
        'src/components',
        'src/layouts',
      ],
    }),
  ]
})