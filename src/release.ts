import type { App } from 'vue'
import * as components from '@/components'
import './style/index.scss'
import { $config } from './symbol'
import 'animate.css'

export * from '@/components'
export * from '@/assets/icons'
export * from '@/type'

export default (app: App<Element>) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })

  app.provide($config, { namespace: 'elin', ns: (className) => `elin-${className}` })
}
