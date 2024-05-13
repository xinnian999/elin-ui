<template>
  <e-popover v-bind="{ ...$attrs, ...$props }" v-model="visible">
    <slot />

    <template #content>
      <e-menu :items="options" direction="vertical" @select="handleSelect" />
    </template>
  </e-popover>
</template>

<script setup lang="ts">
import type { Options, Placement, Trigger } from '@/components/common'

withDefaults(
  defineProps<{
    placement?: Placement
    content?: string
    trigger?: Trigger
    options?: Options
  }>(),
  { options: [] as any, trigger: 'click' }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const value = defineModel()

const visible = defineModel('visible', { default: false })

const handleSelect = (key: string) => {
  value.value = key
  emits('select', key as any)
  visible.value = false
}
</script>
