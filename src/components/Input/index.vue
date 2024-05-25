<template>
  <div :class="{ [ns('input')]: true, 'is-disabled': disabled }" v-bind="$attrs">
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :class="ns('input-inner')"
      :value="value"
      :placeholder
      :readonly
      :disabled
      :type
      @input="oninput"
      @focus="onFocus"
      @blur="onBlur"
    />

    <Clear v-show="clearable && type !== 'textarea'" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit, $formItem, $formItemInit } from '@/config'
import type { FormItemCommon } from '@/components/common'
import Clear from '@/components/Clear.vue'

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

const oninput = (e) => {
  value.value = e.target.value
}

const onFocus = () => {}

const onBlur = () => {
  validate()
}
</script>
