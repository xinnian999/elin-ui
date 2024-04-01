<template>
  <ev-modal v-model="visible" title="hello"
    ><p>我是一个modal <IconDelete /></p>
    <template #footer>
      <ev-button @click="visible = false">取消</ev-button>
      <ev-button type="primary" @click="visible = false">提交</ev-button>
    </template>
  </ev-modal>
  <ev-button @click="visible = true">打开modal</ev-button>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
import { ref } from 'vue'

const visible = ref(false)
</script>
