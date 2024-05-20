<template>
  <div v-if="disabled" class="disabled-wrapper">
    <div class="mask"></div>
    <slot />
  </div>

  <slot v-else />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  disabled: Boolean
})
</script>

<style scoped lang="scss">
.disabled-wrapper {
  background-color: var(--elin-disabled-bg-color);
  position: relative;
  .mask {
    cursor: not-allowed;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
}
</style>
