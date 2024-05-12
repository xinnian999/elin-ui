<template>
  <e-tooltip :class="ns('popover')" v-bind="$attrs">
    <slot />
    <template #content>
      <slot name="content" />
    </template>
  </e-tooltip>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { PopoverProps } from '@/components/Popover/type'

withDefaults(defineProps<PopoverProps>(), { placement: 'bottom' })

const { ns } = inject($config, $configInit)!
</script>
