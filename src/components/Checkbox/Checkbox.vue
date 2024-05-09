<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { $config, $configInit } from '@/config'
import { IconChecked } from '@/assets/icons'

const props = withDefaults(defineProps<{ label?: string; value?: string | number | boolean }>(), {})

const { ns } = inject($config, $configInit)

const model = defineModel()

const val = ref(false)

watch(val, (newValue) => {
  if (newValue) {
    model.value = Array.isArray(model.value) ? [...model.value, props.value] : true
  } else {
    model.value = Array.isArray(model.value)
      ? model.value.filter((item) => item !== props.value)
      : false
  }
})
</script>

<template>
  <label :class="ns('checkbox')">
    <span :class="ns('checkbox-box')">
      <input v-model="val" type="checkbox" />
      <span v-if="val" :class="ns('checkbox-box-inner')">
        <IconChecked class="checked-ico" />
      </span>
    </span>
    <span>{{ label }}</span>
  </label>
</template>
