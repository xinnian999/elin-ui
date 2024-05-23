<template>
  <div :class="ns('form-item')">
    <div :class="ns('form-item-label')">
      <label>{{ label }}</label>
    </div>
    <div :class="ns('form-item-content')">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

defineProps<{ label?: string }>()

const { ns } = inject($config, $configInit)
</script>
