<template>
  <slot />
</template>

<script setup lang="ts">
import { inject, onMounted, getCurrentInstance } from 'vue'
import { $config, $configInit } from '@/config'

withDefaults(defineProps<{}>(), {})

const { ns } = inject($config, $configInit)!

const instance = getCurrentInstance()

onMounted(() => {
  console.dir(instance?.vnode.el?.nextElementSibling.getBoundingClientRect())
})

// const handleClick = (e) => {
//   console.log(e)
// }
</script>
