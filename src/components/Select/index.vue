<template>
  <e-dropdown
    v-model:selected="value"
    v-model:visible="visible"
    :options
    :autoClose="!multiple"
    :multiple
  >
    <div :class="[ns('select'), visible && 'is-focus']" v-bind="$attrs">
      <div v-if="!value" :class="ns('select-placeholder')">
        {{ placeholder }}
      </div>
      <div v-else :class="ns('select-value')">
        <template v-if="multiple">
          <e-tag v-for="val in value" :key="val" closable @close="handleClose(val)">{{
            options.find((item) => item.value === val)?.label
          }}</e-tag>
        </template>

        <template v-else>
          {{ options.find((item) => item.value === value)?.label }}
        </template>
      </div>
      <div :class="ns('select-suffix')">
        <IconDropUp v-if="visible" />
        <IconDropDown v-else />
      </div>
    </div>
  </e-dropdown>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { IconDropDown, IconDropUp } from '@/assets/icons'
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
</script>
