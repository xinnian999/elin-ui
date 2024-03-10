import type { App } from 'vue'
import Button from './Button.vue'

export default (app: App) => {
  app.component('FButton', Button)
}
