<template>
  <e-button @click="EMessage.success('success')">Success</e-button>
  <e-button @click="EMessage.warning('Warning')">Warning</e-button>
  <e-button @click="EMessage.info('Info')">Info</e-button>
  <e-button @click="EMessage.error('Error')">Error</e-button>
</template>

<script setup lang="ts">
import { EMessage } from 'elin-ui'
</script>
