<template>
  <button :class="classNames" v-bind="$attrs" @click="handleClick"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { typeCalss, sizeclass } from './class'

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
    outline?: boolean
    circle?: boolean
    disabled?: boolean
    ghost?: boolean
    size?: 'large' | 'default' | 'small' | 'tiny'
  }>(),
  { size: 'default', type: 'default' }
)

const emit = defineEmits<{
  click: [e: Event]
}>()

const classNames = computed(() => ({
  'funny-btn': true,
  'funny-btn-outline': props.outline,
  [typeCalss[props.type]]: true,
  [sizeclass[props.size]]: true,
  'funny-btn-circle': props.circle,
  'funny-btn-disabled': props.disabled,
  'funny-btn-ghost': props.ghost
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>

<style>
.funny-btn-outline {
  border: 1px solid;
}
</style>
