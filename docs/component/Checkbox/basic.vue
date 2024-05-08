<template>
  <e-checkbox v-model="value" label="选项一" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref(false)

watchEffect(() => {
  console.log(value.value)
})
</script>
