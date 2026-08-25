<template>
  <span :class="classNames" :style="avatarStyle">
    <img v-if="src && !imageFailed" :src="src" :alt="alt" @error="handleError" />
    <slot v-else>{{ fallbackText }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { $config, $configInit } from '@/config'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    size?: 'small' | 'default' | 'large' | number
    shape?: 'circle' | 'square'
    name?: string
    background?: string
  }>(),
  { alt: '', size: 'default', shape: 'circle' }
)

const emit = defineEmits<{ error: [event: Event] }>()
const { ns } = inject($config, $configInit)!
const imageFailed = ref(false)

watch(
  () => props.src,
  () => (imageFailed.value = false)
)

const fallbackText = computed(() => props.name?.trim().slice(0, 2).toUpperCase() || '')
const classNames = computed(() => [
  ns('avatar'),
  ns(`avatar-${props.shape}`),
  typeof props.size === 'string' && ns(`avatar-${props.size}`)
])
const avatarStyle = computed(() => ({
  ...(typeof props.size === 'number'
    ? {
        width: `${props.size}px`,
        height: `${props.size}px`,
        fontSize: `${Math.max(12, props.size * 0.36)}px`
      }
    : {}),
  ...(props.background ? { backgroundColor: props.background } : {})
}))

const handleError = (event: Event) => {
  imageFailed.value = true
  emit('error', event)
}
</script>
