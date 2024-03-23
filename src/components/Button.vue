<template>
  <button :class="classNames" v-bind="$attrs">点我把</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: string
  outline: boolean
}>()

const classNames = computed(() => ({
  btn: true,
  'btn-outline': props.outline,
  [`btn-${props.type}`]: true
  // 'btn-primary': true
}))
</script>

<style scoped>
/* .btn-info {
  --tw-text-opacity: 1;
  color: #fff;
  outline-color: var(--fallback-in, oklch(var(--in) / 1));
}
.btn-success {
  --tw-text-opacity: 1;
  color: #fff;
  outline-color: var(--fallback-su, oklch(var(--su) / 1));
} */
/* .btn-warning {
  --tw-text-opacity: 1;
  color: #fff;
  outline-color: var(--fallback-wa, oklch(var(--wa) / 1));
} */
/* .btn-error {
  --tw-text-opacity: 1;
  color: #fff;
  outline-color: var(--fallback-er, oklch(var(--er) / 1));
} */

.btn-outline {
  border: 1px solid;
}
</style>
