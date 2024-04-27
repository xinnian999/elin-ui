<template>
  <div :class="[ns('table-wrapper'), isScroll && 'is-scroll']" ref="wrapperRef">
    <table :class="ns('table')">
      <thead :class="ns('table-thead')">
        <tr :class="ns('table-tr')" ref="trRef">
          <th
            v-for="({ label, width, fixed }, index) in columns"
            :class="{
              [ns('table-th')]: true,
              'is-fixed': fixed,
              [`is-fixed-${fixed}`]: true
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
          <td
            v-for="({ prop = '', width, fixed, formatter }, tdIndex) in columns"
            :key="prop"
            :class="{
              [ns('table-td')]: true,
              'is-fixed': fixed,
              [`is-fixed-${fixed}`]: true
            }"
            :style="{
              [fixed!]: computeSticky(tdIndex, fixed)
            }"
          >
            <div :class="ns('table-cell')" :style="{ width: `${width}px` }">
              <component
                v-if="
                  formatter && isVNode(formatter({ val: item[prop], row: item, index: trIndex }))
                "
                :is="formatter({ val: item[prop], row: item, index: trIndex })"
              />
              <template v-else-if="formatter">
                {{ formatter({ val: item[prop], row: item, index: trIndex }) }}
              </template>
              <template v-else>
                {{ item[prop] }}
              </template>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, isVNode } from 'vue'
import type { tableColumnsType } from '@/type'
import { $config } from '@/symbol'

const { ns } = inject($config)!

defineProps<{
  data: { [key: string]: any }[]
  columns: tableColumnsType
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

const isScroll = computed(() => {
  const el = wrapperRef.value || {}

  return el.scrollWidth > el.clientWidth
})
</script>

<style></style>
