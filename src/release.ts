import type { App } from 'vue'
import * as components from '@/components'
import * as directives from '@/directive'
import './style/index.scss'
import { $configInit, $config } from './config'
import 'animate.css'

export * from '@/components'
export * from '@/components/common'
export * from '@/assets/icons'

export default (app: App<Element>) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })

  app.provide($config, $configInit)

  Object.values(directives).forEach((fn) => fn(app, $configInit))
}
