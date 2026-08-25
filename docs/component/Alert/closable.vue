<template>
  <div>
    <e-alert
      v-if="show"
      title="有一个新版本可以安装"
      description="关闭后可通过设置页面再次查看。"
      @close="handleClose"
    />
    <e-button v-else type="primary" plain @click="show = true">重新显示</e-button>
    <p v-if="closed" class="close-result">已触发 close 事件</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
const closed = ref(false)

const handleClose = () => {
  show.value = false
  closed.value = true
}
</script>

<style scoped>
.close-result {
  margin: 10px 0 0;
  color: var(--elin-text-color-placeholder);
  font-size: 13px;
}
</style>
