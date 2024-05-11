<template>
  <e-popover ref="popover">
    <slot />

    <template #content>
      <e-menu :items="options" direction="vertical" @select="handleSelect" />
    </template>
  </e-popover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Options } from '@/components/common'

withDefaults(
  defineProps<{
    options?: Options
  }>(),
  { options: [] }
)

const emits = defineEmits<{
  select: [key: string]
}>()

const value = defineModel()

const popover = ref()

const handleSelect = (key: string) => {
  value.value = key
  emits('select', key)
  popover.value.close()
}

const popoverVisible = computed(() => popover.value?.visible)

defineExpose({
  visible: popoverVisible
})
</script>
