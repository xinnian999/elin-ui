<template>
  <table :class="getNs('table')">
    <thead :class="getNs('table-thead')">
      <tr :class="getNs('table-tr')">
        <th :class="getNs('table-th')" v-for="{ label } in columns" :key="label">
          {{ label }}
        </th>
      </tr>
    </thead>
    <tbody :class="getNs('table-tbody')">
      <tr :class="getNs('table-tr')" v-for="item in data">
        <td :class="getNs('table-td')" v-for="{ prop } in columns" :key="prop">
          {{ item[prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { columnType } from './type'
import { $config } from '@/symbol'

const { getNs } = inject($config)!

defineProps<{
  data: { [key: string]: any }[]
  columns: columnType[]
}>()
</script>

<style></style>
