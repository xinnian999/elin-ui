<template>
  <e-tooltip :class="ns('popover')" v-bind="{ ...$props, ...$attrs }" v-model="visible">
    <slot />
    <template #content>
      <e-menu :items="options" direction="vertical" @select="handleSelect" />
    </template>
  </e-tooltip>
</template>

<script setup lang="ts">
import type { Options, TooltipProps } from '@/components/common'
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

const { ns } = inject($config, $configInit)
withDefaults(
  defineProps<
    TooltipProps & {
      options?: Options
    }
  >(),
  { options: [] as any, trigger: 'click', placement: 'bottom' }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const selected = defineModel('selected', { default: '' })

const visible = defineModel('visible', { default: false })

const handleSelect = (key: string) => {
  selected.value = key
  emits('select', key as any)
  // visible.value = false
}
</script>
