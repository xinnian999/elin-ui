<template>
  <e-switch v-model="flag" on-text="打开" off-text="关闭" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const flag = ref(false)

watchEffect(() => {
  console.log(flag.value)
})
</script>
