import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import UI from '../../../dist/funny-ui'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(UI)
  }
} satisfies Theme
