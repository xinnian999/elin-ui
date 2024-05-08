<template>
  <e-input v-model="value" style="width: 250px" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('')

watchEffect(() => {
  console.log(value.value)
})
</script>
