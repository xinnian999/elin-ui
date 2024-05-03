import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

const UIBase = fileURLToPath(new URL('../../src/', import.meta.url))

export default defineConfig({
  title: 'Elin-UI',
  description: '一个有趣的vue3组件库',
  vite: {
    resolve: {
      alias: {
        '@': UIBase,
        'elin-ui': fileURLToPath(new URL('../../src/release/', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: `/component/Button/` }
    ],
    sidebar: {
      '/guide/': [
        { text: '安装', link: '/guide/install' },
        { text: '使用', link: '/guide/use' }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: `/component/Button/` },
            { text: 'Space 间距', link: '/component/Space' },
            { text: 'Dialog 对话框', link: '/component/Dialog/' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
