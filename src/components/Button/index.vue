<template>
  <button
    v-click-water="clickEffect === 'water' && !disabled && !loading"
    :class="classNames"
    v-bind="$attrs"
    @click="handleClick"
  >
    <IconLoading v-if="loading" :class="ns('icon-loading')" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $configInit, $config } from '@/config'
import { IconLoading } from '@/release'

const { namespace, ns } = inject($config, $configInit)!

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
    plain?: boolean
    circle?: boolean
    round?: boolean
    disabled?: boolean
    text?: boolean
    size?: 'large' | 'default' | 'small' | 'tiny'
    loading?: boolean
    clickEffect?: 'water' | 'zoom'
  }>(),
  { size: 'default', type: 'default', clickEffect: 'water' }
)

const emit = defineEmits<{
  click: [e: Event]
}>()

const classNames = computed(() => ({
  [`${namespace}-button`]: true,
  [`${namespace}-button-${props.type}`]: true,
  [`${namespace}-button-${props.size}`]: true,
  'is-plain': props.plain,
  'is-circle': props.circle,
  'is-round': props.round,
  'is-disabled': props.disabled || props.loading,
  'is-text': props.text,
  'is-click-zoom': props.clickEffect === 'zoom'
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
