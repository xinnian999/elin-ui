import type { App } from 'vue'
import components from '@/components'
import './app.css'

export default (app: App<Element>) => {
  app.use(components)
}
