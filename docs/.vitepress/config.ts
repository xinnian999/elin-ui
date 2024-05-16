import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'Elin-UI',
  description: '一个有趣的vue3组件库',
  base: '/elin-ui/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url)),
        'elin-ui': fileURLToPath(new URL('../../src/release', import.meta.url))
      }
    },
    plugins: [vueJsx()],
    server: {
      port: 9999
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
            { text: 'Button 按钮', link: `/component/Button/` }
            // { text: 'Space 间距', link: '/component/Space' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/component/Input/' },
            { text: 'Checkbox 多选框', link: '/component/Checkbox/' },
            { text: 'Select 选择框', link: '/component/Select/' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/component/Table/' },
            { text: 'List 列表', link: '/component/List/' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Dialog 对话框', link: '/component/Dialog/' },
            { text: 'Tooltip 文字提示', link: '/component/Tooltip/' },
            { text: 'Popover 悬浮气泡', link: '/component/Popover/' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'Dropdown 下拉菜单', link: '/component/Dropdown/' },
            { text: 'Menu 菜单', link: '/component/Menu/' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xinnian999/elin-ui' }]
  }
})
