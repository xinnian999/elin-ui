<template>
  <div class="space-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    direction: string
  }>(),
  { direction: 'horizontal' }
)

const directionCss = computed(() => {
  return props.direction === 'vertical' ? 'column' : 'row'
})
</script>

<style>
.space-container {
  display: flex;
  gap: 20px;
  flex-direction: v-bind(directionCss);
}
</style>
