<template>
  <span :class="ns('badge')">
    <slot />
    <sup v-if="showBadge" :class="badgeClass" :aria-label="ariaLabel">{{ content }}</sup>
  </span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { StatusType } from '@/components/common'

const props = withDefaults(
  defineProps<{
    value?: string | number
    max?: number
    dot?: boolean
    hidden?: boolean
    type?: StatusType
  }>(),
  { max: 99, type: 'danger' }
)

const { ns } = inject($config, $configInit)!
const slots = defineSlots<{ default?(): any }>()
const content = computed(() => {
  if (props.dot) return ''
  return typeof props.value === 'number' && props.value > props.max ? `${props.max}+` : props.value
})
const showBadge = computed(() => !props.hidden && (props.dot || props.value !== undefined))
const badgeClass = computed(() => [
  ns('badge-content'),
  ns(`badge-${props.type}`),
  props.dot && 'is-dot',
  !slots.default && 'is-standalone'
])
const ariaLabel = computed(() => (props.dot ? '有新内容' : String(content.value ?? '')))
</script>
