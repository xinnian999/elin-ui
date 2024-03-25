<template>
  <f-space direction="vertical">
    <f-icon name="delete" />
    <f-space>
      <f-button @click="(e) => console.log(e)">点我吧</f-button>
      <f-button type="primary"><f-icon name="delete" /> 点我吧</f-button>
      <f-button type="success">点我吧</f-button>
      <f-button type="info">点我吧</f-button>
      <f-button type="warning">点我吧</f-button>
      <f-button type="error">点我吧</f-button>
    </f-space>

    <f-space>
      <f-button outline>点我吧</f-button>
      <f-button type="primary" outline>点我吧</f-button>
      <f-button type="success" outline>点我吧</f-button>
      <f-button type="info" outline>点我吧</f-button>
      <f-button type="warning" outline>点我吧</f-button>
      <f-button type="error" outline>点我吧</f-button>
    </f-space>

    <f-space>
      <f-button size="large">点我吧</f-button>
      <f-button size="default">点我吧</f-button>
      <f-button size="small">点我吧</f-button>
      <f-button size="tiny">点我吧</f-button>
    </f-space>

    <f-space>
      <f-button circle>点我吧</f-button>
      <f-button type="primary" circle>点我吧</f-button>
      <f-button type="success" circle>点我吧</f-button>
      <f-button type="info" circle>点我吧</f-button>
      <f-button type="warning" circle>点我吧</f-button>
      <f-button type="error" circle>点我吧</f-button>
    </f-space>

    <f-space>
      <f-button disabled>点我吧</f-button>
      <f-button type="primary" outline disabled @click="click">点我吧</f-button>
      <f-button type="success" disabled>点我吧</f-button>
      <f-button type="info" disabled>点我吧</f-button>
      <f-button type="warning" disabled>点我吧</f-button>
      <f-button type="error" disabled>点我吧</f-button>
    </f-space>
  </f-space>
</template>

<script setup lang="ts">
const click = () => {
  console.log(9999)
}
</script>
