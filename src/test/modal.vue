<template>
  <ev-modal v-model="visible" />
  <ev-button @click="visible = true">打开modal</ev-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<style></style>
