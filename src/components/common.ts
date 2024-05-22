export type anyObject = { [key: string]: any }

export type StatusType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type Option = { label: string; value: string }

export type Options = Option[]

export type Direction = 'vertical' | 'horizontal'

export interface TooltipProps {
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  content?: string
  trigger?: 'hover' | 'click'
  followWidth?: boolean
}

export interface FormItemCommon {
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
}
