<template>
  <table :class="`${namespace}-table`">
    <thead>
      <tr>
        <th v-for="{ label } in columns" :key="label">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td class="td" v-for="{ prop } in columns" :key="prop">{{ item[prop] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { columnType } from './type'
import { $config } from '@/symbol'

const { namespace } = inject($config)!

defineProps<{
  data: { [key: string]: any }[]
  columns: columnType[]
}>()
</script>

<style></style>
