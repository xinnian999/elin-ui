declare module 'vue' {
  export interface GlobalComponents {
    EButton: (typeof import('@/components'))['EButton']
    ESpace: (typeof import('@/components'))['ESpace']
  }
}

export {}
