declare module 'vue' {
  export interface GlobalComponents {
    EButton: (typeof import('@/components'))['EButton']
    ESpace: (typeof import('@/components'))['ESpace']
    EDialog: (typeof import('@/components'))['EDialog']
    ETable: (typeof import('@/components'))['ETable']
    ESelect: (typeof import('@/components'))['ESelect']
    EInput: (typeof import('@/components'))['EInput']
    ECheckbox: (typeof import('@/components'))['ECheckbox']
  }
}

export {}
