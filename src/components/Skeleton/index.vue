<template>
  <div
    v-if="loading"
    :class="[ns('skeleton'), animated && 'is-animated']"
    aria-busy="true"
    aria-label="加载中"
  >
    <div v-if="avatar" :class="[ns('skeleton-avatar'), ns(`skeleton-avatar-${avatarShape}`)]" />
    <div :class="ns('skeleton-content')">
      <div v-if="title" :class="[ns('skeleton-item'), ns('skeleton-title')]" />
      <div
        v-for="row in rows"
        :key="row"
        :class="[ns('skeleton-item'), ns('skeleton-row')]"
        :style="{ width: row === rows ? '62%' : '100%' }"
      />
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { $config, $configInit } from '@/config'

withDefaults(
  defineProps<{
    loading?: boolean
    animated?: boolean
    rows?: number
    title?: boolean
    avatar?: boolean
    avatarShape?: 'circle' | 'square'
  }>(),
  { loading: true, animated: true, rows: 3, title: true, avatarShape: 'circle' }
)
const { ns } = inject($config, $configInit)!
</script>
