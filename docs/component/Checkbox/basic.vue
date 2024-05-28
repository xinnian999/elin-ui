<template>
  <e-checkbox v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>
