declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EButton: (typeof import('elin-ui'))['EButton']
    ESpace: (typeof import('elin-ui'))['ESpace']
    EDialog: (typeof import('elin-ui'))['EDialog']
    ETable: (typeof import('elin-ui'))['ETable']
    ESelect: (typeof import('elin-ui'))['ESelect']
  }
}

export {}
