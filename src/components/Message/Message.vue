<template>
  <Teleport to="body">
    <div
      v-if="visible"
      :class="classNames"
      ref="el"
      @mousemove="handleMove"
      @mouseleave="handleLeave"
    >
      <component :is="icons[type]" /> <slot />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { $config, $configInit } from '@/config'
import type { StatusType } from '@/components/common'
import { IconError, IconInfo, IconSuccess, IconWarning } from '@/assets/icons'

const props = withDefaults(
  defineProps<{
    type: StatusType
  }>(),
  { type: 'info' }
)

const { ns } = inject($config, $configInit)

const classNames = computed(() => ({
  [ns('message')]: true,
  [ns(`message-${props.type}`)]: true
}))

const icons = {
  success: IconSuccess,
  warning: IconWarning,
  info: IconInfo,
  danger: IconError
}

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
