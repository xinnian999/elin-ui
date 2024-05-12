<template>
  <e-popover v-model="visible">
    <slot />

    <template #content>
      <e-menu :items="options" direction="vertical" @select="handleSelect" />
    </template>
  </e-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const visible = ref(false)

const handleSelect = (key: string) => {
  value.value = key
  emits('select', key)
  visible.value = false
}

defineExpose({
  visible
})
</script>
