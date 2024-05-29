<template>
  <div :class="{ [ns('switch')]: true, inlineText, 'is-on': value }">
    <span v-if="offText && !inlineText" :class="{ 'off-text': true, 'is-active': !value }">{{
      offText
    }}</span>

    <label :class="ns('switch-inner')">
      <span class="inline-text" v-if="inlineText">{{ value ? onText : offText }}</span>
      <input type="checkbox" v-model="value" />
      <span class="slider"></span>
    </label>

    <span v-if="onText && !inlineText" :class="{ 'on-text': true, 'is-active': value }">{{
      onText
    }}</span>
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
  inlineText?: boolean
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
