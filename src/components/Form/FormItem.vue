<template>
  <div :class="ns('form-item')">
    <div :class="ns('form-item-label')">
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
import { $config, $configInit } from '@/config'
import type { Rule } from 'async-validator'

const props = defineProps<{ label?: string; name?: string; rules?: Rule }>()

const { ns } = inject($config, $configInit)

const { errors, setRules } = inject('$form')

const rejected = computed(() => errors.value.find((item) => item.field === props.name))

onMounted(() => {
  const { name, rules } = props
  if (rules) {
    setRules({ [name]: rules })
  }
})

provide('$isReject', rejected)
</script>
