import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ElinUI from 'elin-ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElinUI)
  }
} satisfies Theme
