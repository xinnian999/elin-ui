<template>
  <e-radio v-model="value" label="选项一" value="value1" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('')

watchEffect(() => {
  console.log(value.value)
})
</script>
