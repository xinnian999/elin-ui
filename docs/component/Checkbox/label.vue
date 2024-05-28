<template>
  <e-checkbox v-model="value" label="选项一" value="value1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
</script>
