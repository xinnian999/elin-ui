<template>
  <div :class="ns('empty')">
    <div :class="ns('empty-image')" :style="{ width: `${imageSize}px` }">
      <slot name="image">
        <svg viewBox="0 0 160 112" aria-hidden="true">
          <path d="M25 86 48 38h64l23 48" />
          <path d="M25 86h36c3 10 10 15 19 15s16-5 19-15h36" />
          <path d="M61 60h38" />
        </svg>
      </slot>
    </div>
    <div :class="ns('empty-description')">
      <slot>{{ description }}</slot>
    </div>
    <div v-if="$slots.action" :class="ns('empty-action')"><slot name="action" /></div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

withDefaults(defineProps<{ description?: string; imageSize?: number }>(), {
  description: '暂无数据',
  imageSize: 160
})
const { ns } = inject($config, $configInit)!
</script>
