import type { App } from 'vue'
import components from '@/components'
import './app.css'
// import './assets/full.min.css'

export default (app: App<Element>) => {
  app.use(components)
}
