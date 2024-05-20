import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import ElinUI from 'elin-ui'
// @ts-ignore
import Enum from './Enum.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElinUI)
    app.component('EEnum', Enum)
  }
} satisfies Theme
