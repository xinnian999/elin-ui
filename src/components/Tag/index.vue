<template>
  <span :class="classNames"
    ><IconClose v-if="closable" class="close-ico" @click="handleClose" /> <slot
  /></span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { IconClose } from '@/assets/icons'
import { $config, $configInit } from '@/config'

const props = defineProps<{
  closable?: boolean
  type?: 'success' | 'info' | 'warning' | 'danger'
}>()

const emits = defineEmits<{
  close: [e: Event]
}>()

const { ns } = inject($config, $configInit)

const classNames = computed(() => ({
  [ns('tag')]: true,
  [ns(`tag-${props.type}`)]: true
}))

const handleClose = () => {
  emits('close')
}
</script>
