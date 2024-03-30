import type { App } from 'vue'
import { Button, Space, Modal, Icon } from '@/components'
import './app.css'

export default (app: App<Element>) => {
  app.component('EvButton', Button)
  app.component('EvSpace', Space)
  app.component('EvIcon', Icon)
  app.component('EvModal', Modal)
}

export { Button as EvButton, Space as EvSpace, Modal as EvModal, Icon as EvIcon }
