<template>
  <div
    :class="{ [ns('input')]: true, 'is-disabled': disabled, 'is-textarea': type === 'textarea' }"
    v-bind="$attrs"
  >
    <div class="prefix-icon" v-if="($slots.prefix || prefixIcon) && type !== 'textarea'">
      <slot v-if="$slots.prefix" name="prefix" />
      <component v-else :is="prefixIcon" />
    </div>

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

    <Clear v-show="clearable && type !== 'textarea' && value" v-model="value" />

    <div class="suffix-icon" v-if="($slots.suffix || suffixIcon) && type !== 'textarea'">
      <slot v-if="$slots.suffix" name="suffix" />
      <component v-else :is="suffixIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type VNode } from 'vue'
import { $config, $configInit, $formItem, $formItemInit } from '@/config'
import type { FormItemCommon } from '@/components/common'
import Clear from '@/components/Clear.vue'

interface Props extends FormItemCommon {
  type?: 'text' | 'password' | 'textarea'
  prefixIcon?: VNode
  suffixIcon?: VNode
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
