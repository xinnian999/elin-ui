<template>
  <div v-if="visible" :class="`${namespace}-overlay`" @click="handleClose">
    <div :class="`${namespace}-dialog`" @click.stop :style="style" v-bind="$attrs">
      <div v-if="showClose" :class="`${namespace}-dialog-close`" @click="handleClose">
        <IconClose />
      </div>
      <header :class="`${namespace}-dialog-header`">{{ title }}</header>
      <div :class="`${namespace}-dialog-body`"><slot /></div>

      <footer :class="`${namespace}-dialog-footer`">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { IconClose } from '@/release'
import { computed } from 'vue'
import { $config, $configInit } from '@/config'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title: string
    showClose: boolean
    showMask: boolean
    width: number
    top: string
  }>(),
  {
    title: '',
    showClose: true,
    showMask: true,
    width: 500,
    top: '15vh'
  }
)

const { namespace } = inject($config, $configInit)!

const style = computed(() => ({
  [`--${namespace}-dialog-width`]: `${props.width}px`,
  [`--${namespace}-dialog-top`]: props.top
}))

const visible = defineModel<boolean>()

const handleClose = () => {
  visible.value = false
}
</script>

<style></style>
