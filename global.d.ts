declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EButton: (typeof import('elin-design'))['EButton']
    ESpace: (typeof import('elin-design'))['ESpace']
  }
}

export {}
