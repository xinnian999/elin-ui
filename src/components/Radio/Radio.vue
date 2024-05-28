<template>
  <label :class="ns('radio')">
    <span :class="{ [ns('radio-box')]: true, 'is-checked': val }">
      <input v-model="val" type="checkbox" />
      <span v-if="val" :class="ns('radio-box-inner')"> </span>
    </span>
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { $config, $configInit } from '@/config'

const props = withDefaults(defineProps<{ label?: string; value?: string | number | boolean }>(), {
  value: true
})

const { ns } = inject($config, $configInit)

const model = defineModel()

const val = ref(false)

watch(val, (newValue) => {
  if (newValue) {
    return (model.value = props.value)
  }

  if (!newValue && model.value === props.value) {
    val.value = true
  }
})

watch(model, (newValue) => {
  // console.log(newValue, props.value)
  val.value = newValue === props.value
})
</script>
