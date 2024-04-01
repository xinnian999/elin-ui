<template>
  <ev-space direction="vertical">
    <ev-space>
      <ev-button @click="(e) => console.log(e)">点我吧</ev-button>
      <ev-button type="primary"><IconDelete /> 点我吧</ev-button>
      <ev-button type="success">点我吧</ev-button>
      <ev-button type="info">点我吧</ev-button>
      <ev-button type="warning">点我吧</ev-button>
      <ev-button type="error">点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button outline>点我吧</ev-button>
      <ev-button type="primary" outline>点我吧</ev-button>
      <ev-button type="success" outline>点我吧</ev-button>
      <ev-button type="info" outline>点我吧</ev-button>
      <ev-button type="warning" outline>点我吧</ev-button>
      <ev-button type="error" outline>点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button size="large">点我吧</ev-button>
      <ev-button size="default">点我吧</ev-button>
      <ev-button size="small">点我吧</ev-button>
      <ev-button size="tiny">点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button circle>点我吧</ev-button>
      <ev-button type="primary" circle>点我吧</ev-button>
      <ev-button type="success" circle>点我吧</ev-button>
      <ev-button type="info" circle>点我吧</ev-button>
      <ev-button type="warning" circle>点我吧</ev-button>
      <ev-button type="error" circle>点我吧</ev-button>
    </ev-space>

    <ev-space>
      <ev-button disabled>点我吧</ev-button>
      <ev-button type="primary" outline disabled @click="click">点我吧</ev-button>
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
