import components from '@/components'
import type { App } from 'vue'

export default (app: App<Element>) => {
  app.use(components)
}
