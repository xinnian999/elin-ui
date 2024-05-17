<template>
  <ul class="iconList vp-raw">
    <li v-for="(icon, name) in icons" @click="handleCopy(name)">
      <div class="icon"><component :is="icon" /></div>
      <div class="name">{{ name.slice(4) }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import * as icons from '@/assets/icons'

const handleCopy = (name) => {
  navigator.clipboard.writeText(`<${name}/>`).then(() => {
    alert('复制成功')
  })
}
</script>

<style scoped lang="scss">
.iconList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  li {
    height: 100px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    &:hover {
      background-color: var(--elin-primary-color-8);
      color: var(--elin-primary-color);
    }

    .icon {
      font-size: 18px;
    }

    .name {
      font-size: 14px;
    }
  }
}
</style>
