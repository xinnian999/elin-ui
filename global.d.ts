declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EButton: (typeof import('elin-design'))['EButton']
    ESpace: (typeof import('elin-design'))['ESpace']
    EDialog: (typeof import('elin-design'))['EDialog']
    ETable: (typeof import('elin-design'))['ETable']
    ESelect: (typeof import('elin-design'))['ESelect']
  }
}

export {}
