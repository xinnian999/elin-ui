declare module 'vue' {
  export interface GlobalComponents {
    EvButton: (typeof import('@/components'))['EvModal']
    EvSpace: (typeof import('@/components'))['EvSpace']
    EvModal: (typeof import('@/components'))['EvModal']
  }
}

export {}
