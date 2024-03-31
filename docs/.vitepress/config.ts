import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Elin Design',
  description: '一个有趣的vue3组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/component/Button' }
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
            { text: 'Button 按钮', link: '/component/Button' },
            { text: 'Space 间距', link: '/component/Space' },
            { text: 'Modal 弹窗', link: '/component/Modal' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
