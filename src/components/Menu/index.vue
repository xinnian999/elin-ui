<template>
  <ul
    :class="`${namespace}-menu`"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <li
      :class="[`${namespace}-menu-item`, isActive(value) && 'is-active']"
      v-for="{ label, value } in items"
      :key="value"
      @click="handleItemClick(value)"
      v-click-water
    >
      {{ label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import { $config, $configInit } from '@/config'
import type { Options, Direction } from '@/components/common'

const props = withDefaults(
  defineProps<{
    items?: Options
    direction?: Direction
    multiple?: boolean
  }>(),
  { direction: 'horizontal' }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const { namespace } = inject($config, $configInit)!

const active = defineModel()

const isActive = computed(() => {
  const { multiple } = props

  return (value) => {
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
    if (active.value.includes(key)) {
      active.value = active.value.filter((item) => item !== key)
    } else {
      active.value = [...active.value, key]
    }
  } else {
    active.value = key
  }

  emits('select', key)
}

onMounted(() => {
  console.log(props.multiple)
  if (!active.value && props.multiple) {
    active.value = []
  }
})
</script>
