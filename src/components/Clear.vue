<template>
  <div class="clear-bar">
    <span @click="handleClear"> <IconError class="clear-bar-ico" /></span>
  </div>
</template>

<script setup lang="ts">
import { IconError } from '@/assets/icons'
import { watchEffect } from 'vue'
import _ from 'lodash'

const model = defineModel()

const handleClear = () => {
  if (_.isArray(model.value)) {
    model.value = []
  } else {
    model.value = ''
  }
}

watchEffect(() => {
  console.log(model.value)
})
</script>

<style scoped lang="scss">
.clear-bar {
  &-ico {
    cursor: pointer;
  }
}
</style>
