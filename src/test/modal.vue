<template>
  <f-modal v-model="visible" />
  <f-button @click="visible = true">打开modal</f-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<style></style>
