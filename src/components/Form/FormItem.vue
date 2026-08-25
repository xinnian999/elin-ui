<template>
  <div :class="[ns('form-item'), rejected && 'is-reject']">
    <div :class="ns('form-item-label')">
      <span :class="ns('form-item-label-rule')" v-if="name && rules[name]">*</span>
      <label>{{ label }}</label>
    </div>
    <div :class="ns('form-item-content')">
      <slot />
      <div :class="ns('form-item-content-message')" v-if="rejected">
        {{ rejected.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, provide } from 'vue'
import { $config, $configInit, $form, $formItem } from '@/config'
import type { Rule } from 'async-validator'

const props = defineProps<{ label?: string; name?: string; rules?: Rule }>()

const { ns } = inject($config, $configInit)

const form = inject($form)

if (!form) {
  throw new Error('EFormItem must be used inside EForm')
}

const { rules, errors, setRules, validateField } = form

const rejected = computed(() => errors.value.find((item) => item.field === props.name))

onMounted(() => {
  const { name, rules } = props
  if (name && rules) {
    setRules({ [name]: rules })
  }
})

provide($formItem, {
  validate: () => {
    if (props.name) {
      validateField(props.name).catch(() => {})
    }
  }
})
</script>
