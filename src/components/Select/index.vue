<script setup lang="ts">
import { inject, ref } from 'vue'
import { $config, $configInit } from '@/config'
import type { Options } from '@/components/common'

withDefaults(
  defineProps<{
    placeholder?: string
    options?: Options
  }>(),
  { placeholder: '请选择' }
)

const { namespace } = inject($config, $configInit)!

const value = defineModel()
const popover = ref()
</script>

<template>
  <e-popover ref="popover">
    <div :class="[`${namespace}-select`, popover?.visible && 'is-focus']" v-bind="$attrs">
      <div :class="`${namespace}-select-placeholder`" v-if="!value">{{ placeholder }}</div>
    </div>

    <template #content> </template>
  </e-popover>
</template>
