declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EvButton: (typeof import('elin-design'))['EvButton']
    EvSpace: (typeof import('elin-design'))['EvSpace']
    EvModal: (typeof import('elin-design'))['EvModal']
  }
}

export {}
