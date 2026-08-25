<template>
  <e-menu :items class="vp-raw" />
  <br />
  <e-menu :items class="vp-raw" direction="vertical" />
</template>

<script setup lang="ts">
const items = [
  { label: '菜单一', value: 'value1', disabled: false },
  { label: '菜单二', value: 'value2', disabled: false },
  { label: '菜单三', value: 'value3', disabled: false }
]
</script>
