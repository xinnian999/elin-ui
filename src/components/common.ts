export type Options = { label: string; value: string }[]

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
}
