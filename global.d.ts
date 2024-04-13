declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EnButton: (typeof import('elin-design'))['EnButton']
    EnSpace: (typeof import('elin-design'))['EnSpace']
    EnModal: (typeof import('elin-design'))['EnModal']
  }
}

export {}
