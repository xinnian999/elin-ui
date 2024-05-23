<template>
  <form :class="ns('form')">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { anyObject } from '@/components/common'
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import AsyncValidator, { type Rules } from 'async-validator'

interface Props {
  data: anyObject
  rules?: Rules
}

const props = withDefaults(defineProps<Props>(), { rules: {}, data: {} })

const { ns } = inject($config, $configInit)

const validate = () => {
  const validator = new AsyncValidator(props.rules)

  return new Promise((resolve, reject) => {
    validator.validate(props.data, (errors, fields) => {
      if (errors) {
        return reject({ message: '校验不通过', errors, fields })
      }

      return resolve('校验通过')
    })
  })
}

defineExpose({ validate })
</script>
