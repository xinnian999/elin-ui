import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'funny-ui',
  description: '一个有趣的vue3组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/Button' }
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [{ text: 'Button', link: '/Button' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
