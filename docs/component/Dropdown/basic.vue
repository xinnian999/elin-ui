<template>
  <e-dropdown :options>
    <e-button type="primary">打开下拉</e-button>
  </e-dropdown>
</template>

<script setup>
const options = [
  { label: '选项一', value: 'value1' },
  { label: '选项二', value: 'value2' },
  { label: '选项三', value: 'value3' }
]
</script>
