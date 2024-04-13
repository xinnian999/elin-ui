<template>
  <button :class="classNames" v-bind="$attrs" @click="handleClick"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeclass } from './class'

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
  'elin-button': true,
  'is-plain': props.plain,
  [`elin-button-${props.type}`]: true,
  [`elin-button-${props.size}`]: true,
  'elin-button-circle': props.circle,
  'elin-button-round': props.round,
  'elin-button-disabled': props.disabled,
  'is-text': props.text
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
