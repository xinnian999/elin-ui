import type { App } from 'vue'
import { Button, Space, Modal } from '@/components'
import './app.css'
export * from '@/assets/icons'

export default (app: App<Element>) => {
  app.component('EvButton', Button)
  app.component('EvSpace', Space)
  app.component('EvModal', Modal)
}

export { Button as EvButton, Space as EvSpace, Modal as EvModal }
