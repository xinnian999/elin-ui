<template>
  <div :class="ns('card')">
    <div v-if="header || $slots.header" :class="ns('card-header')">
      <slot v-if="$slots.header" name="header" />
      <template v-else>{{ header }}</template>
    </div>
    <div :class="ns('card-body')">
      <slot />
    </div>
    <div v-if="$slots.header" :class="ns('card-footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

withDefaults(
  defineProps<{
    header?: string
  }>(),
  {}
)

const { ns } = inject($config, $configInit)!
</script>
