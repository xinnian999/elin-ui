<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import { IconChecked } from '@/assets/icons'

withDefaults(defineProps<{ label?: string; value?: string | number | boolean }>(), {})

const { namespace } = inject($config, $configInit)!

const model = defineModel()
</script>

<template>
  <label :class="`${namespace}-checkbox`">
    <span :class="`${namespace}-checkbox-box`">
      <input v-model="model" type="checkbox" />
      <span v-if="model" :class="`${namespace}-checkbox-box-inner`">
        <IconChecked class="checked-ico"
      /></span>
    </span>
    <span>{{ label }}</span>
  </label>
</template>
