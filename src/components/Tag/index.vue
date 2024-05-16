<template>
  <span :class="ns('tag')"
    ><IconClose v-if="closable" class="close-ico" @click="handleClose" /> <slot
  /></span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { IconClose } from '@/assets/icons'
import { $config, $configInit } from '@/config'

defineProps<{
  closable?: boolean
}>()

const emits = defineEmits<{
  close: [e: Event]
}>()

const { ns } = inject($config, $configInit)

const handleClose = () => {
  emits('close')
}
</script>
