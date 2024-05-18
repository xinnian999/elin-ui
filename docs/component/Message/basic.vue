<template>
  <e-button type="primary" @click="handleOpen">打开Message</e-button>
</template>

<script setup lang="ts">
import { EMessage } from 'elin-ui'

const handleOpen = () => {
  EMessage('消息提示')
}
</script>
