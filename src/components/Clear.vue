<template>
  <div v-if="model" class="clear">
    <span @click="handleClear"> <IconError class="clear-ico" /></span>
  </div>
</template>

<script setup lang="ts">
import { IconError } from '@/assets/icons'
import { watchEffect } from 'vue'

const model = defineModel()

const handleClear = () => {
  console.log(111)
  model.value = ''
}

watchEffect(() => {
  console.log(model.value)
})
</script>

<style scoped lang="scss">
.clear {
  padding-right: 10px;
  &-ico {
    cursor: pointer;
  }
}
</style>
