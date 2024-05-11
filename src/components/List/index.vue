<template>
  <ul :class="`${namespace}-list`">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { $config, $configInit } from '@/config'

const { namespace } = inject($config, $configInit)!

const active = ref()
</script>
