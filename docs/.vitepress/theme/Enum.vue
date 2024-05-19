<template>
  <div>
    <code>enum</code>&nbsp;
    <e-tooltip trigger="click">
      <e-button text size="small"> <IconWarning /> </e-button>
      <template #content>
        <slot />
      </template>
    </e-tooltip>
  </div>
</template>

<script setup lang="ts">
import { IconWarning } from 'elin-ui'
</script>

<style scoped></style>
