<template>
  <div v-if="visible" :class="classNames" role="alert">
    <component :is="typeIcon" v-if="showIcon" :class="ns('alert-icon')" />
    <div :class="ns('alert-content')">
      <div :class="ns('alert-title')">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.default" :class="ns('alert-description')">
        <slot>{{ description }}</slot>
      </div>
    </div>
    <button
      v-if="closable"
      type="button"
      :class="ns('alert-close')"
      aria-label="关闭"
      @click="close"
    >
      <IconClose />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { IconClose, IconError, IconInfo, IconSuccess, IconWarning } from '@/assets/icons'
import { $config, $configInit } from '@/config'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    type?: 'success' | 'info' | 'warning' | 'danger'
    closable?: boolean
    showIcon?: boolean
    center?: boolean
  }>(),
  { type: 'info', closable: true, showIcon: true }
)
const emit = defineEmits<{ close: [event: MouseEvent] }>()
const { ns } = inject($config, $configInit)!
const visible = ref(true)
const icons = { success: IconSuccess, info: IconInfo, warning: IconWarning, danger: IconError }
const typeIcon = computed(() => icons[props.type])
const classNames = computed(() => [
  ns('alert'),
  ns(`alert-${props.type}`),
  props.center && 'is-center'
])
const close = (event: MouseEvent) => {
  visible.value = false
  emit('close', event)
}
</script>
