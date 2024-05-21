<template>
  <div :class="{ [ns('input')]: true, 'is-disabled': disabled }" v-bind="$attrs">
    <input :class="ns('input-inner')" v-model="value" :placeholder :readonly :disabled />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { FormItemCommon } from '@/components/common'

withDefaults(defineProps<FormItemCommon>(), { placeholder: '请输入' })

const { ns } = inject($config, $configInit)!

const value = defineModel()
</script>
