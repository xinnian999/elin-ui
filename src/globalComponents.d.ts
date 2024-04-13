declare module 'vue' {
  export interface GlobalComponents {
    EnButton: (typeof import('@/components'))['EnButton']
    EnSpace: (typeof import('@/components'))['EnSpace']
    EnModal: (typeof import('@/components'))['EnModal']
  }
}

export {}
