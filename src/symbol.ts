import type { InjectionKey } from 'vue'

export const $config = Symbol() as InjectionKey<{
  namespace: string
  ns: (className: string) => string
}>
