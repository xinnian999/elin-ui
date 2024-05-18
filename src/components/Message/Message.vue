<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :class="classNames"
      ref="el"
      @mousemove="handleMove"
      @mouseleave="handleLeave"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { $config, $configInit } from '@/config'
import type { StatusType } from '@/components/common'

const props = withDefaults(
  defineProps<{
    type: StatusType
  }>(),
  { type: 'primary' }
)

const { ns } = inject($config, $configInit)

const classNames = computed(() => ({
  [ns('message')]: true,
  [ns(`message-${props.type}`)]: true
}))

const visible = ref(true)

let timer: NodeJS.Timeout

const handleLeave = () => {
  timer = setTimeout(() => {
    visible.value = false
  }, 3000)
}

const handleMove = () => {
  clearTimeout(timer)
}

onMounted(handleLeave)
</script>
