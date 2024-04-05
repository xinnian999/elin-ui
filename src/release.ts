import type { App } from 'vue'
import * as components from '@/components'
import './style/index.scss'

export * from '@/components'
export * from '@/assets/icons'

export default (app: App<Element>) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}
