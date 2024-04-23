<template>
  <e-table :data="tableData" :columns="columns" style="width: 800px; overflow: auto"> </e-table>
</template>

<script lang="ts" setup>
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
    width: 200,
    fixed: 'left'
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
