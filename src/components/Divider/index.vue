<template>
  <div :class="classNames" role="separator" :aria-orientation="direction">
    <span v-if="$slots.default && direction === 'horizontal'" :class="ns('divider-text')"
      ><slot
    /></span>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { Direction } from '@/components/common'

const props = withDefaults(
  defineProps<{
    direction?: Direction
    contentPosition?: 'left' | 'center' | 'right'
    dashed?: boolean
  }>(),
  { direction: 'horizontal', contentPosition: 'center' }
)
const { ns } = inject($config, $configInit)!
const classNames = computed(() => [
  ns('divider'),
  ns(`divider-${props.direction}`),
  ns(`divider-${props.contentPosition}`),
  props.dashed && 'is-dashed'
])
</script>
