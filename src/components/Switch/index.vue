<template>
  <div :class="ns('switch')">
    <label :class="ns('switch-inner')">
      <input type="checkbox" v-model="value" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { $config, $configInit } from '@/config'

interface Props {}

withDefaults(defineProps<Props>(), {})

const { ns } = inject($config, $configInit)

const modelValue = defineModel()

const value = ref(false)

watch(value, (newValue) => {
  modelValue.value = newValue
})
</script>
