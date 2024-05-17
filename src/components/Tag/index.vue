<template>
  <span :class="classNames"
    ><IconClose v-if="closable" class="close-ico" @click="handleClose" /> <slot
  /></span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { IconClose } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { StatusType } from '@/components/common'

const props = withDefaults(
  defineProps<{
    closable?: boolean
    type: StatusType
  }>(),
  { type: 'primary' }
)

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
