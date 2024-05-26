<template>
  <e-input v-model="value" style="width: 250px" :prefix-icon="IconSearch" />
  <br />
  <e-input v-model="value" style="width: 250px" :suffix-icon="IconEdit" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { IconEdit, IconSearch } from 'elin-ui'

const value = ref('')

watchEffect(() => {
  console.log(value.value)
})
</script>
