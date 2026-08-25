<template>
  <e-switch v-model="flag" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(false)

</script>
