<template>
  <form :class="ns('form')">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { anyObject } from '@/components/common'
import { inject, watch } from 'vue'
import { $config, $configInit } from '@/config'

const props = defineProps<{
  data: anyObject
}>()

const { ns } = inject($config, $configInit)

const validate = () => {}

// watch(
//   () => props.data,
//   () => {
//     console.log(props.data)
//   },
//   { deep: true }
// )
</script>
