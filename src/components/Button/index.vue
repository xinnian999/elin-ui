<template>
  <button :class="classNames" v-bind="$attrs"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { typeCalss, sizeclass } from './class'

const props = withDefaults(
  defineProps<{
    type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
    outline: boolean
    size: 'large' | 'default' | 'small' | 'tiny'
  }>(),
  { size: 'default', type: 'default' }
)

const classNames = computed(() => ({
  btn: true,
  'btn-outline': props.outline,
  [typeCalss[props.type]]: true,
  [sizeclass[props.size]]: true
  // 'btn-primary': true
}))
</script>

<style>
.btn-outline {
  border: 1px solid;
}
</style>
