<template>
  <div :class="`${namespace}-color-picker`">
    <input :class="`${namespace}-color-picker-inner`" v-model="value" type="color" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  { placeholder: '请输入文本' }
)

const { namespace } = inject($config, $configInit)!

const value = defineModel()
</script>
