import type { InjectionKey } from 'vue'

type $Config = {
  namespace: string
  ns: (className: string) => string
}

export const namespace = 'elin'

export const $config = Symbol() as InjectionKey<$Config>

export const $configInit: $Config = { namespace, ns: (className) => `${namespace}-${className}` }
