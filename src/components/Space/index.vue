<template>
  <div :class="ns('space')" :style>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { Direction } from '@/components/common'

const props = withDefaults(
  defineProps<{
    direction: Direction
    wrap: boolean
    gap: number
  }>(),
  { direction: 'horizontal', gap: 20 }
)

const { ns } = inject($config, $configInit)!

const style = computed(() => {
  return {
    [`--${ns('space-direction')}`]: props.direction === 'vertical' ? 'column' : 'row',
    [`--${ns('space-wrap')}`]: props.wrap ? 'wrap' : 'nowrap',
    [`--${ns('space-gap')}`]: props.gap + 'px'
  }
})
</script>
