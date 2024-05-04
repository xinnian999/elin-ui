<template>
  <e-table :data="tableData" :columns="columns"> </e-table>
</template>

<script lang="tsx" setup>
import type { tableColumns } from '@/release'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    age: 20
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    age: 25
  },
  {
    date: '2016-05-04',
    name: 'Tony',
    address: 'No. 189, Grove St, Los Angeles',
    age: 30
  },
  {
    date: '2016-05-01',
    name: 'Amy',
    address: 'No. 189, Grove St, Los Angeles',
    age: 18
  }
]

const columns: tableColumns = [
  {
    label: '姓名',
    prop: 'name',
    width: 120,
    fixed: 'left'
  },
  {
    label: '年龄',
    prop: 'age',
    width: 100
  },
  {
    label: '日期',
    prop: 'date',
    width: 180
  },
  {
    label: '地址',
    prop: 'address',
    width: 200
  },
  {
    label: '操作',
    width: 150,
    fixed: 'right',
    formatter: ({ val, row, index }) => {
      return (
        <>
          <e-button text type="primary" size="small">
            修改
          </e-button>
          <e-Button text type="danger" size="small">
            删除
          </e-Button>
        </>
      )
    }
  }
]
</script>
