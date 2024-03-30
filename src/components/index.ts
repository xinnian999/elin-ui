import type { App } from 'vue'
import Button from './Button/index.vue'
import Space from './Space.vue'
import Icon from './Icon/index.vue'
import Modal from './Modal/index.vue'

export default (app: App) => {
  app.component('EvButton', Button)
  app.component('EvSpace', Space)
  app.component('EvIcon', Icon)
  app.component('EvModal', Modal)
}
