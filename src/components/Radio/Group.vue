<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import Radio from './Radio.vue'
import type { Options } from '@/components/common'

defineProps<{
  options: Options
}>()

const { ns } = inject($config, $configInit)

const model = defineModel()
</script>

<template>
  <div :class="ns(`radio-group`)">
    <Radio v-for="option in options" v-model="model" v-bind="option" :key="option.label" />
  </div>
</template>
