<template>
  <ev-space direction="vertical">
    <ev-space>
      <ev-button @click="(e) => console.log(e)">Default</ev-button>
      <ev-button type="primary"><IconDelete /> Primary</ev-button>
      <ev-button type="success">success</ev-button>
      <ev-button type="info">info</ev-button>
      <ev-button type="warning">warning</ev-button>
      <ev-button type="error">error</ev-button>
    </ev-space>

    <ev-space>
      <ev-button plain>Default</ev-button>
      <ev-button type="primary" plain>点我吧</ev-button>
      <ev-button type="success" plain>点我吧</ev-button>
      <ev-button type="info" plain>点我吧</ev-button>
      <ev-button type="warning" plain>点我吧</ev-button>
      <ev-button type="error" plain>点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button text>Default</ev-button>
      <ev-button type="primary" text>点我吧</ev-button>
      <ev-button type="success" text>点我吧</ev-button>
      <ev-button type="info" text>点我吧</ev-button>
      <ev-button type="warning" text>点我吧</ev-button>
      <ev-button type="error" text>点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button size="large">Large</ev-button>
      <ev-button size="default">Default</ev-button>
      <ev-button size="small">Samll</ev-button>
    </ev-space>

    <ev-space>
      <ev-button circle>点</ev-button>
      <ev-button type="primary" circle>点</ev-button>
      <ev-button type="success" circle>点</ev-button>
      <ev-button type="info" circle>点</ev-button>
      <ev-button type="warning" circle>点</ev-button>
      <ev-button type="error" circle>点</ev-button>
    </ev-space>

    <ev-space>
      <ev-button disabled>Default</ev-button>
      <ev-button type="primary" plain disabled @click="click">点我吧</ev-button>
      <ev-button type="success" disabled>点我吧</ev-button>
      <ev-button type="info" disabled>点我吧</ev-button>
      <ev-button type="warning" disabled>点我吧</ev-button>
      <ev-button type="error" disabled>点我吧</ev-button>
    </ev-space>
  </ev-space>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
const click = () => {
  console.log(9999)
}
</script>
