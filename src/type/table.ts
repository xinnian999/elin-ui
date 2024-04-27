export type tableColType = {
  label?: string
  prop?: string
  width?: number
  fixed?: 'left' | 'right'
  formatter?: (data: { val: any; row: object; index: number }) => any
}

export type tableColumnsType = tableColType[]
