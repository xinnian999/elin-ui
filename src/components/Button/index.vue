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
  'elin-btn': true,
  'elin-btn-outline': props.outline,
  [typeCalss[props.type]]: true,
  [sizeclass[props.size]]: true,
  'elin-btn-circle': props.circle,
  'elin-btn-disabled': props.disabled,
  'elin-btn-ghost': props.ghost
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>

<style>
.elin-btn-outline {
  border: 1px solid;
}
</style>
