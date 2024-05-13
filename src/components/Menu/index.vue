<template>
  <ul
    :class="`${namespace}-menu`"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <li
      :class="[`${namespace}-menu-item`, active === value && 'is-active']"
      v-for="{ label, value } in items"
      :key="value"
      @click="handleItemClick(value)"
    >
      {{ label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { $config, $configInit } from '@/config'
import type { Options, Direction } from '@/components/common'

withDefaults(
  defineProps<{
    items?: Options
    direction?: Direction
  }>(),
  { direction: 'horizontal' }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const { namespace } = inject($config, $configInit)!

const active = defineModel()

const handleItemClick = (key) => {
  active.value = key
  emits('select', key)
}
</script>
