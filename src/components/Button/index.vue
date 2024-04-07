<template>
  <button :class="classNames" v-bind="$attrs" @click="handleClick"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { typeCalss, sizeclass } from './class'

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
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
  'elin-btn': true,
  'elin-btn-plain': props.plain,
  [typeCalss[props.type]]: true,
  [sizeclass[props.size]]: true,
  'elin-btn-circle': props.circle,
  'elin-btn-round': props.round,
  'elin-btn-disabled': props.disabled,
  'elin-btn-text': props.text
}))

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
