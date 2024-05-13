<template>
  <e-popover v-bind="{ ...$props, ...$attrs }" v-model="visible">
    <slot />
    <template #content>
      <e-menu v-model="selected" :items="options" direction="vertical" @select="handleSelect" />
    </template>
  </e-popover>
</template>

<script setup lang="ts">
import type { Options, TooltipProps } from '@/components/common'

withDefaults(
  defineProps<
    TooltipProps & {
      options?: Options
    }
  >(),
  { options: [] as any, trigger: 'click', placement: 'bottom' }
)

const selected = defineModel('selected', { default: '' })

const visible = defineModel('visible', { default: false })

const handleSelect = () => {
  visible.value = false
}
</script>
