<template>
  <e-radio v-model="value" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref(false)

watchEffect(() => {
  console.log(value.value)
})
</script>
