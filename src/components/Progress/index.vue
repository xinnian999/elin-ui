<template>
  <div
    :class="ns('progress')"
    :aria-valuenow="normalized"
    aria-valuemin="0"
    aria-valuemax="100"
    role="progressbar"
  >
    <div :class="ns('progress-track')" :style="{ height: `${strokeWidth}px` }">
      <div :class="barClass" :style="{ width: `${normalized}%` }" />
    </div>
    <span v-if="showText" :class="ns('progress-text')"
      ><slot :percentage="normalized">{{ normalized }}%</slot></span
    >
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $config, $configInit } from '@/config'

const props = withDefaults(
  defineProps<{
    percentage: number
    status?: 'success' | 'warning' | 'danger'
    strokeWidth?: number
    showText?: boolean
    striped?: boolean
    animated?: boolean
  }>(),
  { strokeWidth: 8, showText: true }
)
const { ns } = inject($config, $configInit)!
const normalized = computed(() => Math.round(Math.min(100, Math.max(0, props.percentage))))
const barClass = computed(() => [
  ns('progress-bar'),
  props.status && ns(`progress-${props.status}`),
  props.striped && 'is-striped',
  props.animated && 'is-animated'
])
</script>
