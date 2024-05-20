declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EButton: (typeof import('elin-ui'))['EButton']
    ESpace: (typeof import('elin-ui'))['ESpace']
    EDialog: (typeof import('elin-ui'))['EDialog']
    ETable: (typeof import('elin-ui'))['ETable']
    ESelect: (typeof import('elin-ui'))['ESelect']
    EInput: (typeof import('elin-ui'))['EInput']
    EColorPicker: (typeof import('elin-ui'))['EColorPicker']
    ECheckbox: (typeof import('elin-ui'))['ECheckbox']
    ECheckboxGroup: (typeof import('elin-ui'))['ECheckboxGroup']
    ETooltip: (typeof import('elin-ui'))['ETooltip']
    EPopover: (typeof import('elin-ui'))['EPopover']
    EMenu: (typeof import('elin-ui'))['EMenu']
    EList: (typeof import('elin-ui'))['EList']
    EListItem: (typeof import('elin-ui'))['EListItem']
    EDropdown: (typeof import('elin-ui'))['EDropdown']
    ETag: (typeof import('elin-ui'))['ETag']
    ECard: (typeof import('elin-ui'))['ECard']
  }
}

export {}
