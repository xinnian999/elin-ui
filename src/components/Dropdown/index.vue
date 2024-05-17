<template>
  <e-popover v-bind="{ ...$props, ...$attrs }" v-model="visible">
    <slot />
    <template #content>
      <e-menu
        v-model="selected"
        :items="options"
        direction="vertical"
        @select="handleSelect"
        :multiple
        :renderLabel
      />
    </template>
  </e-popover>
</template>

<script setup lang="ts">
import type { Option, Options, TooltipProps } from '@/components/common'

const props = withDefaults(
  defineProps<
    TooltipProps & {
      options?: Options
      autoClose?: boolean
      multiple?: boolean
      renderLabel?: (item: Option) => any
    }
  >(),
  { options: [] as any, trigger: 'click', placement: 'bottom', autoClose: true }
)

const selected = defineModel('selected', { default: '' })

const visible = defineModel('visible', { default: false })

const handleSelect = () => {
  if (props.autoClose) {
    visible.value = false
  }
}
</script>
