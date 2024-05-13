<template>
  <e-dropdown v-model="value" v-model:visible="visible" :options ref="popover">
    <div :class="[ns('select'), visible && 'is-focus']" v-bind="$attrs">
      <div v-if="!value" :class="ns('select-placeholder')">{{ placeholder }}</div>
      <div v-else :class="ns('select-value')">
        {{ options.find((item) => item.value === value)?.label }}
      </div>
      <div :class="ns('select-suffix')">
        <IconDropUp v-if="visible" />
        <IconDropDown v-else />
      </div>
    </div>
  </e-dropdown>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { IconDropDown, IconDropUp } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { Options } from '@/components/common'

withDefaults<{}>(
  defineProps<{
    placeholder?: string
    options?: Options
  }>(),
  { placeholder: '请选择', options: [] }
)

const { ns } = inject($config, $configInit)!

const value = defineModel()

const visible = ref(false)
</script>
