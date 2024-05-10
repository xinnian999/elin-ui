<template>
  <e-popover ref="popover">
    <div :class="[`${namespace}-select`, popover?.visible && 'is-focus']" v-bind="$attrs">
      <div v-if="!value" :class="ns('select-placeholder')">{{ placeholder }}</div>
      <div v-else :class="ns('select-value')">
        {{ options.find((item) => item.value === value).label }}
      </div>
    </div>

    <template #content>
      <e-menu :items="options" direction="vertical" @change="handleSelect" />
    </template>
  </e-popover>
</template>

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

const { namespace, ns } = inject($config, $configInit)!

const value = defineModel()
const popover = ref()

const handleSelect = (key) => {
  value.value = key
  popover.value.close()
}
</script>
