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
  }>(),
  { direction: 'horizontal' }
)

const { ns } = inject($config, $configInit)!

const style = computed(() => {
  return {
    [`--${ns('space-direction')}`]: props.direction === 'vertical' ? 'column' : 'row',
    [`--${ns('space-wrap')}`]: props.wrap ? 'wrap' : 'nowrap'
  }
})
</script>

<style>
.space-container {
  display: flex;
  gap: 20px;
  flex-direction: v-bind(directionCss);
}
</style>
