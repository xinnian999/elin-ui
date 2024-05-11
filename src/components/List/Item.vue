<template>
  <li :class="[`${namespace}-list-item`]">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

const { namespace } = inject($config, $configInit)!
</script>
