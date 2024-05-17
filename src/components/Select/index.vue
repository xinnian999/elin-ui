<template>
  <e-dropdown
    v-model:selected="value"
    v-model:visible="visible"
    :options
    :autoClose="!multiple"
    :multiple
    :renderLabel
  >
    <div :class="[ns('select'), visible && 'is-focus']" v-bind="$attrs">
      <div v-if="!value" :class="ns('select-placeholder')">
        {{ placeholder }}
      </div>
      <div v-else :class="ns('select-value')">
        <div v-if="multiple" :class="ns('select-value-multiple')">
          <e-tag v-for="val in value" :key="val" closable @close="handleClose(val)">{{
            options.find((item) => item.value === val)?.label
          }}</e-tag>
        </div>

        <template v-else>
          {{ options.find((item) => item.value === value)?.label }}
        </template>
      </div>
      <div :class="ns('select-suffix')">
        <IconDropDown />
      </div>
    </div>
  </e-dropdown>
</template>

<script setup lang="tsx">
import { inject, ref } from 'vue'
import { IconDropDown } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { Options } from '@/components/common'

withDefaults<{}>(
  defineProps<{
    placeholder?: string
    options?: Options
    multiple?: boolean
  }>(),
  { placeholder: '请选择', options: [] }
)

const { ns } = inject($config, $configInit)!

const value = defineModel()

const visible = ref(false)

const handleClose = (val) => {
  value.value = value.value.filter((item) => item !== val)
}

const renderLabel = ({ label, value }) => {
  return (
    <div>
      <span>{label}</span>
    </div>
  )
}
</script>
