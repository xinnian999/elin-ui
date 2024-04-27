<template>
  <e-table :data="tableData" :columns="columns" style="width: 800px"> </e-table>
</template>

<script lang="tsx" setup>
import type { tableColumnsType } from '@/release'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    age: 20
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const columns: tableColumnsType = [
  {
    label: '姓名',
    prop: 'name',
    width: 120,
    fixed: 'left',
    formatter: ({ val, row, index }) => {
      return val + index
    }
  },
  {
    label: '日期',
    prop: 'date',
    width: 200
  },
  {
    label: 'address',
    prop: 'address',
    width: 200
  },
  {
    label: '操作',
    width: 200,
    fixed: 'right'
  }
]
</script>
