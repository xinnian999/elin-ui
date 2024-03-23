import components from '@/components'
import type { App } from 'vue'
import './assets/full.min.css'

export default (app: App<Element>) => {
  app.use(components)
}
