<template>
  <p>当前值: {{ value }}</p>
  <e-checkbox-group v-model="value" :options />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])

const options = [
  { label: '选项一', value: 'value1', disabled: false },
  { label: '选项二', value: 'value2', disabled: false },
  { label: '选项三', value: 'value3', disabled: false }
]
</script>
