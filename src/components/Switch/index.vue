<template>
  <div :class="{ [ns('switch')]: true }">
    <span v-if="offText" :class="{ 'off-text': true, 'is-active': !value }">{{ offText }}</span>

    <label :class="ns('switch-inner')">
      <input type="checkbox" v-model="value" />
      <span class="slider"></span>
    </label>

    <span v-if="onText" :class="{ 'on-text': true, 'is-active': value }">{{ onText }}</span>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { $config, $configInit } from '@/config'

interface Props {
  onText?: string
  offText?: string
  onValue?: string | number | boolean
  offValue?: string | number | boolean
}

const props = withDefaults(defineProps<Props>(), {
  onValue: true,
  offValue: false
})

const { ns } = inject($config, $configInit)

const modelValue = defineModel()

const value = ref(false)

watch(value, (newValue) => {
  const { onValue, offValue } = props

  if (newValue) {
    modelValue.value = onValue
  } else {
    modelValue.value = offValue
  }
})
</script>
