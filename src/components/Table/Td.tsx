import { defineComponent, inject } from 'vue'
import type { tableCol } from '@/type'
import { $configInit, $config } from '@/config'

type TdProps = {
  rowData: { [key: string]: any }
  column: tableCol
  index: number
}

const Td = defineComponent({
  props: ['rowData', 'column', 'index'],

  setup({ rowData, column, index }: TdProps) {
    const { ns } = inject($config, $configInit)!

    const { formatter, prop = '', fixed, width } = column

    const value = formatter ? formatter({ val: rowData[prop], row: rowData, index }) : rowData[prop]

    return () => (
      <td
        class={{
          [ns('table-td')]: true,
          'is-fixed': fixed
          //   [`is-fixed-${fixed}`]: true
        }}
      >
        <div class={ns('table-cell')}>{value}</div>
      </td>
    )
  }
})

export default Td
