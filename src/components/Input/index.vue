<template>
  <Disabled :disabled>
    <div :class="[ns('input')]" v-bind="$attrs">
      <input :class="ns('input-inner')" v-model="value" :placeholder :readonly :disabled />
    </div>
  </Disabled>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import Disabled from '@/components/Disabled.vue'

withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
  }>(),
  { placeholder: '请输入' }
)

const { ns } = inject($config, $configInit)!

const value = defineModel()
</script>
