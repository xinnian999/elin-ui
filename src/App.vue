<template>
  <e-input v-model="value" style="width: 250px" :options />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项一', value: 'value1' },
  { label: '选项二', value: 'value2' },
  { label: '选项三', value: 'value3' }
]
</script>
