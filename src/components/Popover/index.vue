<template>
  <span ref="reference" @click="handleClick"><slot /></span>
  <Teleport to="body">
    <div v-if="visible" ref="floating" :style="floatingStyles" :class="ns('popover')">Tooltip</div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject, ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { $config, $configInit } from '@/config'
import { computePosition, flip, offset, shift, useFloating } from '@floating-ui/vue'

withDefaults(
  defineProps<{
    placement:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end'
  }>(),
  {}
)

const { ns } = inject($config, $configInit)!

const reference = ref()
const floating = ref()
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'bottom',
  strategy: 'fixed',
  middleware: []
})

const visible = ref(false)

const handleClick = () => {
  visible.value = !visible.value
}

const updatePosition = async () => {
  const { x, y } = await computePosition(reference.value, floating.value, {
    middleware: [shift(), flip(), offset(15)], // 按需引用的中间件
    placement: 'bottom' // 指定初始化浮动位置
  })

  Object.assign(floating.value.style, {
    transform: `translate(${x}px, ${y}px)`
  })
}

watch(visible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      updatePosition()
      // 这里注意应该还要做一下debounce的处理
      window.onresize = function () {
        updatePosition()
      }
      window.onscroll = function () {
        updatePosition()
      }
    })
  } else {
    window.onresize = null
    window.onscroll = null
  }
})

const dismiss = (event: MouseEvent) => {
  const isClickFloating = floating.value?.contains(event.target)
  const isClickReference = reference.value?.contains(event.target)

  if (!isClickFloating && !isClickReference) {
    visible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', dismiss)
})

onUnmounted(() => {
  window.removeEventListener('click', dismiss)
})
</script>
