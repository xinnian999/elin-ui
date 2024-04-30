<template>
  <button :class="classNames" v-bind="$attrs" @click="handleClick"><slot /></button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { $configInit, $config } from '@/config'

const { namespace } = inject($config, $configInit)!

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
    plain?: boolean
    circle?: boolean
    round?: boolean
    disabled?: boolean
    text?: boolean
    size?: 'large' | 'default' | 'small' | 'tiny'
  }>(),
  { size: 'default', type: 'default' }
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
  'is-disabled': props.disabled,
  'is-text': props.text
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
