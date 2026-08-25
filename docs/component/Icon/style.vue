<template>
  <div class="icon-styles vp-raw">
    <div class="style-row">
      <span>尺寸</span>
      <IconBell :size="16" />
      <IconBell :size="24" />
      <IconBell :size="34" />
    </div>
    <div class="style-row">
      <span>颜色</span>
      <IconHeart :size="26" color="#ee0a24" />
      <IconSparkles :size="26" color="#efa314" />
      <IconShieldCheck :size="26" color="#67c23a" />
    </div>
    <div class="style-row">
      <span>线宽</span>
      <IconSettings :size="28" :stroke-width="1" />
      <IconSettings :size="28" :stroke-width="2" />
      <IconSettings :size="28" :stroke-width="3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBell, IconHeart, IconSettings, IconShieldCheck, IconSparkles } from 'elin-ui'
</script>

<style scoped>
.icon-styles {
  display: grid;
  gap: 12px;
}

.style-row {
  display: flex;
  min-height: 64px;
  padding: 10px 18px;
  border: 1px solid var(--elin-border-color-lighter);
  border-radius: 10px;
  align-items: center;
  gap: 22px;
  color: var(--elin-text-color);
}

.style-row > span {
  width: 48px;
  color: var(--elin-text-color-placeholder);
  font-size: 13px;
}
</style>
