<template>
  <div
    :class="{ [ns('input')]: true, 'is-disabled': disabled, 'is-reject': isReject }"
    v-bind="$attrs"
  >
    <input
      :class="ns('input-inner')"
      v-model="value"
      :placeholder
      :readonly
      :disabled
      @blur="onBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { FormItemCommon } from '@/components/common'

withDefaults(defineProps<FormItemCommon>(), { placeholder: '请输入' })

const { ns } = inject($config, $configInit)!

const { isReject, validate } = inject('$formItem')

const value = defineModel()

const onBlur = () => {
  validate()
}
</script>
