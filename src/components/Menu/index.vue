<script setup lang="ts">
import { inject, ref } from 'vue'
import { $config, $configInit } from '@/config'
import type { Options, Direction } from '@/components/common'

withDefaults(
  defineProps<{
    placeholder?: string
    items?: Options
    direction?: Direction
  }>(),
  { placeholder: '请输入文本', direction: 'horizontal' }
)

const { namespace } = inject($config, $configInit)!

const active = ref()

const handleItemClick = (key) => {
  active.value = key
}
</script>

<template>
  <ul
    :class="`${namespace}-menu`"
    :style="{ flexDirection: direction === 'horizontal' ? 'row' : 'column' }"
  >
    <li
      :class="[`${namespace}-menu-item`, active === value && 'is-active']"
      v-for="{ label, value } in items"
      @click="handleItemClick(value)"
    >
      {{ label }}
    </li>
  </ul>
</template>
