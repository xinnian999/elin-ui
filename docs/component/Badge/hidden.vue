<template>
  <e-space :gap="28">
    <e-badge :value="18" :hidden="hidden">
      <e-button>收件箱</e-button>
    </e-badge>
    <e-button type="primary" plain @click="hidden = !hidden">
      {{ hidden ? '显示徽标' : '隐藏徽标' }}
    </e-button>
  </e-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hidden = ref(false)
</script>
