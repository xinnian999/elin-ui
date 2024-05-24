<template>
  <div :class="[ns('form-item'), rejected && 'is-reject']">
    <div :class="ns('form-item-label')">
      <span :class="ns('form-item-label-rule')" v-if="rules[name]">*</span>
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
import { $config, $configInit, $formItem } from '@/config'
import type { Rule } from 'async-validator'

const props = defineProps<{ label?: string; name?: string; rules?: Rule }>()

const { ns } = inject($config, $configInit)

const { rules, errors, setRules, validateField } = inject('$form')

const rejected = computed(() => errors.value.find((item) => item.field === props.name))

onMounted(() => {
  const { name, rules } = props
  if (rules) {
    setRules({ [name]: rules })
  }
})

provide($formItem, {
  validate: () => {
    validateField(props.name).catch(() => {})
  }
})
</script>
