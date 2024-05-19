<template>
  <e-input v-model="value" style="width: 250px" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
