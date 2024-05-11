<template>
  <e-dropdown v-model="value" :options ref="popover">
    <div :class="[ns('select'), isFocused && 'is-focus']" v-bind="$attrs">
      <div v-if="!value" :class="ns('select-placeholder')">{{ placeholder }}</div>
      <div v-else :class="ns('select-value')">
        {{ options.find((item) => item.value === value)?.label }}
      </div>
      <div :class="ns('select-suffix')">
        <IconDropUp v-if="isFocused" />
        <IconDropDown v-else />
      </div>
    </div>
  </e-dropdown>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { IconDropDown, IconDropUp } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { Options } from '@/components/common'

withDefaults(
  defineProps<{
    placeholder?: string
    options?: Options
  }>(),
  { placeholder: '请选择', options: [] }
)

const { ns } = inject($config, $configInit)!

const value = defineModel()

const popover = ref()

const isFocused = computed(() => popover.value?.visible)
</script>
