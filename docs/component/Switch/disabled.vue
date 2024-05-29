<template>
  <e-switch v-model="flag" disabled />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const flag = ref(false)

watchEffect(() => {
  console.log(flag.value)
})
</script>
