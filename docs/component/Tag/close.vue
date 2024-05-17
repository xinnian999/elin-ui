<template>
  <e-space>
    <e-tag v-for="key in tags" :type="key" closable @close="handleClose(key)">标签</e-tag>
  </e-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { StatusType } from 'elin-ui'

const tags = ref<StatusType[]>(['primary', 'success', 'info', 'warning', 'danger'])

const handleClose = (key) => {
  tags.value = tags.value.filter((item) => item !== key)
}
</script>
