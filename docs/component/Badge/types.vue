<template>
  <e-space :gap="30" wrap>
    <e-badge v-for="item in badges" :key="item.type" :value="item.value" :type="item.type">
      <span class="badge-box">{{ item.label }}</span>
    </e-badge>
  </e-space>
</template>

<script setup lang="ts">
import type { StatusType } from 'elin-ui'

const badges: { label: string; value: number; type: StatusType }[] = [
  { label: '待处理', value: 6, type: 'primary' },
  { label: '已完成', value: 12, type: 'success' },
  { label: '提醒', value: 3, type: 'warning' },
  { label: '异常', value: 1, type: 'danger' }
]
</script>

<style scoped>
.badge-box {
  display: inline-flex;
  min-width: 68px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--elin-border-color);
  border-radius: 7px;
  background: var(--elin-bg-color);
}
</style>
