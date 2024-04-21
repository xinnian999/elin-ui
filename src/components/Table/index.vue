<template>
  <div>
    <table :class="getNs('table')">
      <thead :class="getNs('table-thead')">
        <tr :class="getNs('table-tr')" ref="trRef">
          <th
            v-for="({ label, width, fixed }, index) in columns"
            :class="[getNs('table-th'), fixed && 'is-fixed']"
            :key="label"
            :style="{ position: fixed ? 'sticky' : 'relative', [fixed!]: computeSticky(index) }"
          >
            <div :class="getNs('table-cell')" :style="{ width: `${width}px` }">
              {{ label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody :class="getNs('table-tbody')">
        <tr :class="getNs('table-tr')" v-for="item in data" :key="item.prop">
          <td
            v-for="({ prop, width, fixed }, index) in columns"
            :key="prop"
            :class="[getNs('table-td'), fixed && 'is-fixed']"
            :style="{
              position: fixed ? 'sticky' : 'relative',
              [fixed!]: computeSticky(index)
            }"
          >
            <div :class="getNs('table-cell')" :style="{ width: `${width}px` }">
              {{ prop && item[prop] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref } from 'vue'
import type { tableColumnsType } from '@/type'
import { $config } from '@/symbol'

const { getNs } = inject($config)!

defineProps<{
  data: { [key: string]: any }[]
  columns: tableColumnsType
}>()

const trRef = ref()

const computeSticky = computed(() => (tdIndex: number) => {
  // await nextTick()
  if (trRef.value) {
    const el = trRef.value.children[tdIndex]

    return `${el.offsetLeft}px`
  }
})
</script>

<style></style>
