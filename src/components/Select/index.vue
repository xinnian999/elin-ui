<template>
  <e-tooltip
    v-model="visible"
    trigger="click"
    placement="bottom"
    :class="ns('select-drop')"
    :disabled
  >
    <div
      :class="{
        [ns('select')]: true,
        'is-focus': visible,
        'is-disabled': disabled
      }"
      v-bind="$attrs"
    >
      <div
        v-if="(multiple ? !value.length : !value) && !q && !inputIng"
        :class="ns('select-placeholder')"
      >
        {{ placeholder }}
      </div>

      <div :class="ns('select-value')">
        <div v-if="multiple" :class="ns('select-value-multiple')">
          <e-tag v-for="val in value" :key="val" closable @close="handleClose(val)">{{
            options.find((item) => item.value === val)?.label
          }}</e-tag>
        </div>

        <template v-if="!multiple && !q">
          <span :class="ns('select-value-radio')">
            {{ options.find((item) => item.value === value)?.label }}
          </span>
        </template>

        <input
          v-if="filterable"
          v-model="q"
          class="filter-input"
          @compositionstart="handleCompositionStart"
          @compositionend="handleCompositionEnd"
          :style="{
            marginTop: multiple && value.length && '5px'
          }"
        />
      </div>

      <Clear v-if="ifClear" v-model="value" />

      <div :class="ns('select-suffix')">
        <IconDropDown />
      </div>
    </div>

    <template #content>
      <e-menu
        v-model="value"
        :items="currentOptions"
        :labelKey
        :valueKey
        direction="vertical"
        :multiple
        :renderLabel
        @select="handleSelect"
      />
    </template>
  </e-tooltip>
</template>

<script setup lang="tsx">
import { computed, inject, ref } from 'vue'
import { IconDropDown, IconChecked } from '@/assets/icons'
import { $config, $configInit } from '@/config'
import type { FormItemCommon, Options } from '@/components/common'
import Clear from '@/components/Clear.vue'

interface Props extends FormItemCommon {
  options?: Options
  multiple?: boolean
  labelKey?: string
  valueKey?: string
  filterable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请选择',
  options: () => [],
  labelKey: 'label',
  valueKey: 'value'
})

const { ns } = inject($config, $configInit)!

const value = defineModel()

const q = ref('')

const visible = ref(false)

const inputIng = ref(false)

const ifClear = computed(() => {
  const { clearable, multiple } = props
  if (!clearable) return false

  if (multiple && value.value.length) {
    return true
  }

  return !!(!multiple && value.value)
})

const currentOptions = computed(() => {
  const { options, labelKey } = props
  if (q.value) {
    return options.filter((item) => item[labelKey].includes(q.value))
  }
  return options
})

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

const handleSelect = () => {
  if (!props.multiple) {
    visible.value = false
    q.value = ''
  }
}

const handleCompositionStart = () => {
  inputIng.value = true
}

const handleCompositionEnd = () => {
  inputIng.value = false
}
</script>
