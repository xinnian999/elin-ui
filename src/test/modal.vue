<template>
  <en-modal v-model="visible" title="hello"
    ><p>我是一个modal <IconDelete /></p>
    <template #footer>
      <en-button @click="visible = false">取消</en-button>
      <en-button type="primary" @click="visible = false">提交</en-button>
    </template>
  </en-modal>
  <en-button @click="visible = true">打开modal</en-button>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
import { ref } from 'vue'

const visible = ref(false)
</script>
