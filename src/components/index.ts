import type { App } from 'vue'
import Button from './Button/index.vue'
import Space from './Space.vue'
import Icon from './Icon/index.vue'
import Modal from './Modal/index.vue'

export default (app: App) => {
  app.component('FButton', Button)
  app.component('FSpace', Space)
  app.component('FIcon', Icon)
  app.component('FModal', Modal)
}
