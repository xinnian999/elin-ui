<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import Checkbox from './Checkbox.vue'
import type { Options } from '@/components/common'

defineProps<{
  options: Options
}>()

const { ns } = inject($config, $configInit)

const model = defineModel()
</script>

<template>
  <div :class="ns(`checkbox-group`)">
    <Checkbox v-for="option in options" v-model="model" v-bind="option" :key="option.label" />
  </div>
</template>
