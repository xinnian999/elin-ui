import type { App } from 'vue'
import Vue3Toasity, { toast, type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
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
    app.component(key, value as any)
  })

  app.provide($config, $configInit)

  app.use(Vue3Toasity, {
    autoClose: 3000,
    position: 'top-center',
    transition: toast.TRANSITIONS.FLIP,
    toastClassName: `${$configInit.namespace}-message`
  } as ToastContainerOptions)

  Object.values(directives).forEach((fn) => fn(app, $configInit))
}
