import type { InjectionKey } from 'vue'

export type $Config = {
  namespace: string
  ns: (className: string) => string
}

export const namespace = 'elin'

export const $config = Symbol('$config') as InjectionKey<$Config>

export const $configInit: $Config = { namespace, ns: (className) => `${namespace}-${className}` }
