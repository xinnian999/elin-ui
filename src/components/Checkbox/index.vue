<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import { IconChecked } from '@/assets/icons'

withDefaults(defineProps<{ label: string; value: string | number | boolean }>(), {})

const { namespace } = inject($config, $configInit)!

const value = defineModel()
</script>

<template>
  <label :class="`${namespace}-checkbox`">
    <span :class="`${namespace}-checkbox-box`"
      ><input v-model="value" type="checkbox" /> <IconChecked class="checked-ico" v-if="value" />
    </span>
    <span>{{ label }}</span>
  </label>
</template>
