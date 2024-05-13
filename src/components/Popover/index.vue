<template>
  <e-tooltip :class="ns('popover')" v-bind="{ ...$props, ...$attrs }">
    <slot />
    <template #content>
      <slot v-if="$slots.content" name="content" />
      <div v-else>{{ content }}</div>
    </template>
  </e-tooltip>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'
import type { TooltipProps } from '@/components/common'

withDefaults(defineProps<TooltipProps>(), { placement: 'bottom' })

const { ns } = inject($config, $configInit)
</script>
