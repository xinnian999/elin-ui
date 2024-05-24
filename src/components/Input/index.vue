<template>
  <div :class="{ [ns('input')]: true, 'is-disabled': disabled }" v-bind="$attrs">
    <input
      :class="ns('input-inner')"
      v-model="value"
      :placeholder
      :readonly
      :disabled
      :type
      @blur="onBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit, $formItem, $formItemInit } from '@/config'
import type { FormItemCommon } from '@/components/common'

interface Props extends FormItemCommon {
  type?: 'text' | 'password' | 'textarea'
}

withDefaults(defineProps<Props>(), {
  placeholder: '请输入',
  type: 'text'
})

const { ns } = inject($config, $configInit)

const { validate } = inject($formItem, $formItemInit)

const value = defineModel()

const onBlur = () => {
  validate()
}
</script>
