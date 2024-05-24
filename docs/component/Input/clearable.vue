<template>
  <e-input v-model="value" style="width: 250px" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
