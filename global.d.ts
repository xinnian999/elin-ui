declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EvButton: (typeof import('elin-design'))['EvButton']
    EvIcon: (typeof import('elin-design'))['EvIcon']
    EvSpace: (typeof import('elin-design'))['EvSpace']
    EvModal: (typeof import('elin-design'))['EvModal']
  }
}

export {}
