<template>
  <div :class="{ [ns('table-wrapper')]: true, 'is-scroll': isScroll }" ref="wrapperRef">
    <table :class="ns('table')">
      <colgroup>
        <col v-for="{ width } in columns" :width="width" />
      </colgroup>
      <thead :class="ns('table-thead')">
        <tr :class="ns('table-tr')" ref="trRef">
          <th
            v-for="({ label, width, fixed }, index) in columns"
            :class="{
              [ns('table-th')]: true,
              'is-fixed': fixed,
              'is-fixed-left': fixedShadow.left === index,
              'is-fixed-right': fixedShadow.right === index
            }"
            :key="label"
            :style="{ [fixed!]: computeSticky(index, fixed) }"
          >
            <div :class="ns('table-cell')" :style="{ width: `${width}px` }">
              {{ label }}
            </div>
          </th>
        </tr>
      </thead>

      <tbody :class="ns('table-tbody')">
        <tr :class="ns('table-tr')" v-for="(item, trIndex) in data" :key="item.prop">
          <Td
            v-for="(column, tdIndex) in columns"
            :key="column.prop"
            :row-data="item"
            :column="column"
            :index="trIndex"
            :style="{
              [column.fixed!]: computeSticky(tdIndex, column.fixed)
            }"
            :class="{
              'is-fixed-left': fixedShadow.left === tdIndex,
              'is-fixed-right': fixedShadow.right === tdIndex
            }"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { tableColumns } from '@/type'
import { $config, $configInit } from '@/config'
import Td from './Td'

const { ns } = inject($config, $configInit)!

const props = defineProps<{
  data: { [key: string]: any }[]
  columns: tableColumns
}>()

const trRef = ref()

const wrapperRef = ref()

const computeSticky = computed(() => (tdIndex: number, direction: 'left' | 'right' = 'left') => {
  if (trRef.value) {
    const el = trRef.value.children[tdIndex]
    const offset = {
      left: el.offsetLeft,
      right: el.offsetParent.clientWidth - el.offsetLeft - el.offsetWidth
    }

    return `${offset[direction]}px`
  }
})

const fixedShadow = computed(() => {
  const { columns } = props

  let left = 0
  let right = columns.findIndex((item) => item.fixed === 'right')

  columns.forEach((item, index) => {
    if (item.fixed === 'left') {
      left = index
    }
  })

  return {
    left,
    right
  }
})

const isScroll = computed(() => {
  const el = wrapperRef.value || {}

  return el.scrollWidth > el.clientWidth
})
</script>

<style></style>
