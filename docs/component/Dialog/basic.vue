<template>
  <e-dialog v-model="visible" title="你好">
    <p>我是一个dialog <IconDelete /></p>
    <template #footer>
      <e-button @click="visible = false">取消</e-button>
      <e-button type="primary" @click="visible = false">提交</e-button>
    </template>
  </e-dialog>
  <e-button @click="visible = true">打开modal</e-button>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
import { ref } from 'vue'

const visible = ref(false)
</script>
