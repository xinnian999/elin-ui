declare module 'vue' {
  export interface GlobalComponents {
    EButton: (typeof import('@/components'))['EButton']
    ESpace: (typeof import('@/components'))['ESpace']
    EDialog: (typeof import('@/components'))['EDialog']
    ETable: (typeof import('@/components'))['ETable']
    ESelect: (typeof import('@/components'))['ESelect']
    EInput: (typeof import('@/components'))['EInput']
    EColorPicker: (typeof import('@/components'))['EColorPicker']
    ECheckbox: (typeof import('@/components'))['ECheckbox']
    ECheckboxGroup: (typeof import('@/components'))['ECheckboxGroup']
    ERadio: (typeof import('@/components'))['ERadio']
    ERadioGroup: (typeof import('@/components'))['ERadioGroup']
    ETooltip: (typeof import('@/components'))['ETooltip']
    EPopover: (typeof import('@/components'))['EPopover']
    EMenu: (typeof import('@/components'))['EMenu']
    EList: (typeof import('@/components'))['EList']
    EListItem: (typeof import('@/components'))['EListItem']
    EForm: (typeof import('@/components'))['EForm']
    EFormItem: (typeof import('@/components'))['EFormItem']
    EDropdown: (typeof import('@/components'))['EDropdown']
    ETag: (typeof import('@/components'))['ETag']
    ECard: (typeof import('@/components'))['ECard']
    ESwitch: (typeof import('@/components'))['ESwitch']
  }
}

export {}
