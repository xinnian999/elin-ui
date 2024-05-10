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
  <e-popover>
    <div :class="`${namespace}-select`">
      <!--    <input :class="`${namespace}-select-inner`" v-model="value" :placeholder />-->
    </div>
  </e-popover>
</template>
