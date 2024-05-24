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

      <Clear v-if="clearable" v-model="value" />

      <div :class="ns('select-suffix')">
        <IconDropDown />
      </div>
    </div>
  </e-dropdown>
</template>

<script setup lang="tsx">
import { inject, ref } from 'vue'
import { IconDropDown, IconChecked } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { FormItemCommon, Options } from '@/components/common'
import Clear from '@/components/Clear.vue'

interface Props extends FormItemCommon {
  options?: Options
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), { placeholder: '请选择', options: [] })

const { ns } = inject($config, $configInit)!

const value = defineModel()

const visible = ref(false)

const handleClose = (val) => {
  value.value = value.value.filter((item) => item !== val)
}

const renderLabel = ({ label, value: val }) => {
  let checked = false
  if (props.multiple) {
    checked = value.value.includes(val)
  } else {
    checked = value.value === val
  }

  return (
    <div style={{ display: 'flex', 'justify-content': 'space-between', alignItems: 'center' }}>
      <span>{label}</span> {checked && <IconChecked />}
    </div>
  )
}
</script>
