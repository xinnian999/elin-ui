<template>
  <e-table :data="tableData" :columns="columns"> </e-table>
</template>

<script lang="ts" setup>
const tableData = [
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
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '日期',
    prop: 'date'
  },
  {
    label: 'address',
    prop: 'address'
  }
]
</script>
