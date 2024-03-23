<template>
  <button :class="classNames" v-bind="$attrs">点我把</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type: string
    outline: boolean
    size: string
  }>(),
  { size: 'default' }
)

const sizeCss: any = {
  default: '',
  large: 'lg',
  small: 'sm',
  tiny: 'xs'
}

const classNames = computed(() => ({
  btn: true,
  'btn-outline': props.outline,
  [`btn-${props.type}`]: true,
  [`btn-${sizeCss[props.size]}`]: true
  // 'btn-primary': true
}))
</script>

<style scoped>
.btn-outline {
  border: 1px solid;
}
</style>
