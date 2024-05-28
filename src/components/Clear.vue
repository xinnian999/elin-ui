<template>
  <div class="clear">
    <span @click="handleClear"> <IconError class="clear-ico" /></span>
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
.clear {
  padding-right: 10px;
  &-ico {
    cursor: pointer;
  }
}
</style>
