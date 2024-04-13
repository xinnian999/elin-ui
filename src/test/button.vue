<template>
  <en-space direction="vertical">
    <en-space>
      <en-button @click="(e) => console.log(e)">Default</en-button>
      <en-button type="primary"><IconDelete /> Primary</en-button>
      <en-button type="success">success</en-button>
      <en-button type="info">info</en-button>
      <en-button type="warning">warning</en-button>
      <en-button type="danger">danger</en-button>
    </en-space>

    <en-space>
      <en-button plain>Default</en-button>
      <en-button type="primary" plain>点我吧</en-button>
      <en-button type="success" plain>点我吧</en-button>
      <en-button type="info" plain>点我吧</en-button>
      <en-button type="warning" plain>点我吧</en-button>
      <en-button type="danger" plain>点我吧</en-button>
    </en-space>

    <en-space>
      <en-button text>Default</en-button>
      <en-button type="primary" text>点我吧</en-button>
      <en-button type="success" text>点我吧</en-button>
      <en-button type="info" text>点我吧</en-button>
      <en-button type="warning" text>点我吧</en-button>
      <en-button type="danger" text>点我吧</en-button>
    </en-space>

    <en-space>
      <en-button size="large">Large</en-button>
      <en-button size="default">Default</en-button>
      <en-button size="small">Samll</en-button>
    </en-space>

    <en-space>
      <en-button round>Default</en-button>
      <en-button type="primary" round>Primary</en-button>
      <en-button type="success" round>success</en-button>
      <en-button type="info" round>info</en-button>
      <en-button type="warning" round>warning</en-button>
      <en-button type="danger" round>danger</en-button>
    </en-space>

    <en-space>
      <en-button circle>点</en-button>
      <en-button type="primary" circle>点</en-button>
      <en-button type="success" circle>点</en-button>
      <en-button type="info" circle>点</en-button>
      <en-button type="warning" circle>点</en-button>
      <en-button type="danger" circle>点</en-button>
    </en-space>

    <en-space>
      <en-button disabled>Default</en-button>
      <en-button type="primary" disabled @click="click">点我吧</en-button>
      <en-button type="success" disabled>点我吧</en-button>
      <en-button type="info" disabled>点我吧</en-button>
      <en-button type="warning" disabled>点我吧</en-button>
      <en-button type="danger" disabled>点我吧</en-button>
    </en-space>
  </en-space>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
const click = () => {
  console.log(9999)
}
</script>
