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

<template>
  <div :class="`${namespace}-input`">
    <input :class="`${namespace}-input-inner`" v-model="value" :placeholder />
  </div>
</template>
