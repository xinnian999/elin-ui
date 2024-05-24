<template>
  <form :class="ns('form')">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { anyObject } from '@/components/common'
import { inject, provide, ref } from 'vue'
import { $config, $configInit } from '@/config'
import AsyncValidator, { type Rules } from 'async-validator'
import { pick } from 'lodash'

interface Props {
  data: anyObject
  rules?: Rules
}

const props = withDefaults(defineProps<Props>(), { rules: {}, data: {} })

const { ns } = inject($config, $configInit)

const currentRules = ref(props.rules)

const errors = ref([])

const validate = () => {
  const validator = new AsyncValidator(currentRules.value)

  return new Promise((resolve, reject) => {
    validator.validate(props.data, (errs, fields) => {
      if (errs) {
        errors.value = errs
        return reject({ message: '校验不通过', errors, fields })
      }

      errors.value = []
      return resolve('校验通过')
    })
  })
}

const validateField = (name) => {
  const validator = new AsyncValidator(pick(currentRules.value, [name]))

  validator.validate(props.data, (errs) => {
    if (errs) {
      errors.value = [...errors.value, ...errs]
      return
    }
    errors.value = errors.value.filter((item) => item.field !== name)
  })
}

provide('$form', {
  errors,
  rules: currentRules,
  setRules: (rules) => {
    currentRules.value = { ...currentRules.value, ...rules }
  },
  validateField
})

defineExpose({ validate })
</script>
