<template>
  <div v-if="model" class="clear" @click="model = ''">
    <IconError />
  </div>
</template>

<script setup lang="ts">
import { IconError } from '@/assets/icons'
import { watchEffect } from 'vue'

const model = defineModel()

watchEffect(() => {
  // console.log(model.value)
})
</script>

<style scoped>
.clear {
  cursor: pointer;
}
</style>
