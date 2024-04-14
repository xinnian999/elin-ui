<template>
  <div v-if="visible" :class="`${namespace}-overlay`" @click="handleClose">
    <div :class="[`${namespace}-dialog`]" @click.stop>
      <header>{{ title }}</header>
      <div :class="`${namespace}-dialog-body`"><slot /></div>

      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $config } from '@/symbol'
import { inject } from 'vue'

withDefaults(defineProps<{ title: string; showClose: boolean; showMask: boolean }>(), {
  title: '',
  showClose: true,
  showMask: true
})

const { namespace } = inject($config)!

const visible = defineModel<boolean>()

const handleClose = () => {
  visible.value = false
}
</script>

<style></style>
