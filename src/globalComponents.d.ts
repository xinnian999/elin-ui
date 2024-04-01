declare module 'vue' {
  export interface GlobalComponents {
    EvButton: (typeof import('@/components'))['EvButton']
    EvSpace: (typeof import('@/components'))['EvSpace']
    EvModal: (typeof import('@/components'))['EvModal']
  }
}

export {}
