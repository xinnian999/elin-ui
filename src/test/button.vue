<template>
  <e-space direction="vertical">
    <div>
      <e-button @click="(e) => console.log(e)">Default</e-button>
      <e-button type="primary"> Primary</e-button>
      <e-button type="success">success</e-button>
      <e-button type="info">info</e-button>
      <e-button type="warning">warning</e-button>
      <e-button type="danger">danger</e-button>
    </div>

    <div>
      <e-button plain>Default</e-button>
      <e-button type="primary" plain>点我吧</e-button>
      <e-button type="success" plain>点我吧</e-button>
      <e-button type="info" plain>点我吧</e-button>
      <e-button type="warning" plain>点我吧</e-button>
      <e-button type="danger" plain>点我吧</e-button>
    </div>

    <div>
      <e-button text>Default</e-button>
      <e-button type="primary" text>点我吧</e-button>
      <e-button type="success" text>点我吧</e-button>
      <e-button type="info" text>点我吧</e-button>
      <e-button type="warning" text>点我吧</e-button>
      <e-button type="danger" text>点我吧</e-button>
    </div>

    <div>
      <e-button size="large">Large</e-button>
      <e-button size="default">Default</e-button>
      <e-button size="small">Samll</e-button>
    </div>

    <div>
      <e-button round>Default</e-button>
      <e-button type="primary" round>Primary</e-button>
      <e-button type="success" round>success</e-button>
      <e-button type="info" round>info</e-button>
      <e-button type="warning" round>warning</e-button>
      <e-button type="danger" round>danger</e-button>
    </div>

    <div>
      <e-button circle>点</e-button>
      <e-button type="primary" circle>点</e-button>
      <e-button type="success" circle>点</e-button>
      <e-button type="info" circle>点</e-button>
      <e-button type="warning" circle>点</e-button>
      <e-button type="danger" circle>点</e-button>
    </div>

    <div>
      <e-button disabled>Default</e-button>
      <e-button type="primary" disabled @click="click">点我吧</e-button>
      <e-button type="success" disabled>点我吧</e-button>
      <e-button type="info" disabled>点我吧</e-button>
      <e-button type="warning" disabled>点我吧</e-button>
      <e-button type="danger" disabled>点我吧</e-button>
    </div>
  </e-space>
</template>

<script setup lang="ts">
import { IconDelete } from '@/release'
const click = () => {
  console.log(9999)
}
</script>
