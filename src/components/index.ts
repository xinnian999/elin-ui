import type { App } from 'vue'
import Button from './Button.vue'
import Space from './Space.vue'

export default (app: App) => {
  app.component('FButton', Button)
  app.component('FSpace', Space)
}
