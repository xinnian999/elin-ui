<template>
  <ul
    :class="`${namespace}-menu`"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <li
      v-for="item in items"
      :class="[`${namespace}-menu-item`, isActive(item[valueKey]) && 'is-active']"
      :key="item[valueKey]"
      @click="handleItemClick(item[valueKey])"
      v-click-water
    >
      <template v-if="renderLabel">
        <!--        <component v-if="isVNode(renderLabel(item))" :is="renderLabel(item)" />-->
        <!--        <template v-else> {{ renderLabel(item) }}</template>-->
        <component :is="renderLabel(item)" />
      </template>
      <template v-else>
        {{ item[labelKey] }}
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, inject, isVNode } from 'vue'
import { $config, $configInit } from '@/config'
import type { Option, Options, Direction } from '@/components/common'

const props = withDefaults(
  defineProps<{
    items?: Options
    direction?: Direction
    multiple?: boolean
    renderLabel?: (item: Option) => any
    labelKey: string
    valueKey: string
  }>(),
  { direction: 'horizontal', labelKey: 'label', valueKey: 'value' }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const { namespace } = inject($config, $configInit)!

const active = defineModel()

const isActive = computed(() => {
  const { multiple } = props

  return (value) => {
    if (!active.value) return
    if (multiple) {
      return active.value.includes(value)
    } else {
      return active.value === value
    }
  }
})

const handleItemClick = (key) => {
  const { multiple } = props
  if (multiple) {
    const currentValue = active.value || []
    if (active.value.includes(key)) {
      active.value = currentValue.filter((item) => item !== key)
    } else {
      active.value = [...currentValue, key]
    }
  } else {
    active.value = key
  }

  emits('select', key)
}
</script>
