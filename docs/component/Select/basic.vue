<template>
  <e-select v-model="value" style="width: 350px" :options />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('')

const options = [
  { label: '选项一', value: 'value1', disabled: false },
  { label: '选项二', value: 'value2', disabled: false },
  { label: '选项三', value: 'value3', disabled: false }
]

watchEffect(() => {
  console.log(value.value)
})
</script>
