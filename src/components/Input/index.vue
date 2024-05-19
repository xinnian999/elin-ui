<template>
  <div :class="[ns('input'), disabled && 'is-disabled']">
    <input :class="ns('input-inner')" v-model="value" :placeholder :readonly :disabled />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
// import Disabled from '@/components/Disabled.vue'

withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
  }>(),
  { placeholder: '请输入' }
)

const { ns } = inject($config, $configInit)!

const value = defineModel()
</script>
