declare module 'vue' {
  export interface GlobalComponents {
    EButton: (typeof import('@/components'))['EButton']
    ESpace: (typeof import('@/components'))['ESpace']
    EDialog: (typeof import('@/components'))['EDialog']
    ETable: (typeof import('@/components'))['ETable']
    ESelect: (typeof import('@/components'))['ESelect']
    EInput: (typeof import('@/components'))['EInput']
    ECheckbox: (typeof import('@/components'))['ECheckbox']
    ECheckboxGroup: (typeof import('@/components'))['ECheckboxGroup']
    ETooltip: (typeof import('@/components'))['ETooltip']
    EPopover: (typeof import('@/components'))['EPopover']
    EMenu: (typeof import('@/components'))['EMenu']
    EList: (typeof import('@/components'))['EList']
    EListItem: (typeof import('@/components'))['EListItem']
    EDropdown: (typeof import('@/components'))['EDropdown']
    ETag: (typeof import('@/components'))['ETag']
  }
}

export {}
