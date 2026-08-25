<template>
  <div>
    <e-progress :percentage="percentage" striped animated />
    <e-space class="progress-actions" :gap="10">
      <e-button size="small" :disabled="percentage <= 0" @click="decrease">−10</e-button>
      <e-button size="small" type="primary" :disabled="percentage >= 100" @click="increase">
        +10
      </e-button>
    </e-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref(40)
const increase = () => (percentage.value = Math.min(100, percentage.value + 10))
const decrease = () => (percentage.value = Math.max(0, percentage.value - 10))
</script>

<style scoped>
.progress-actions {
  margin-top: 16px;
}
</style>
