<template>
  <div :class="ns('form-item')">
    <div :class="ns('form-item-label')">
      <label>{{ label }}</label>
    </div>
    <div :class="ns('form-item-content')">
      <slot />
      <div :class="ns('form-item-content-message')" v-if="isReject">
        {{ ruleConfig.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, watchEffect } from 'vue'
import { $config, $configInit } from '@/config'

const props = defineProps<{ label?: string; name?: string }>()

const { ns } = inject($config, $configInit)

const { rules, errors } = inject('$form')

const ruleConfig = computed(() => errors.value.find((item) => item.field === props.name))

const isReject = computed(() => rules[props.name] && ruleConfig.value)

watchEffect(() => {
  // console.log(ruleConfig.value)
})
</script>
