import type { InjectionKey } from 'vue'

//全局配置
export type $Config = {
  namespace: string
  ns: (className: string) => string
}

export const namespace = 'elin'

export const $config = Symbol('$config') as InjectionKey<$Config>

export const $configInit: $Config = { namespace, ns: (className) => `${namespace}-${className}` }

//表单组件通用
export type $FormItem = {
  validate: () => void
}

export const $formItem = Symbol('$formItem') as InjectionKey<$FormItem>

export const $formItemInit: $FormItem = {
  validate: () => {}
}
