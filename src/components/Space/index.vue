<template>
  <div :class="ns('space')" :style>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $config, $configInit } from '@/config'

const props = withDefaults(
  defineProps<{
    direction: string
  }>(),
  { direction: 'horizontal' }
)

const { ns } = inject($config, $configInit)!

const style = computed(() => {
  return {
    [`--${ns('space-direction')}`]: props.direction === 'vertical' ? 'column' : 'row'
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
