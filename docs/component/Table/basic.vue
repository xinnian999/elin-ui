<template>
  <e-table :data :columns />
</template>

<script lang="tsx" setup>
import type { tableColumns } from 'elin-ui'

const data = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
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
  }
]

const columns: tableColumns = [
  {
    label: '姓名',
    prop: 'name',
    width: 150
  },
  {
    label: '日期',
    prop: 'date',
    width: 150
  },
  {
    label: '地址',
    prop: 'address'
  }
]
</script>
