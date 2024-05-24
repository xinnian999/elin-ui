<template>
  <e-input v-model="value" type="textarea" style="width: 250px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
