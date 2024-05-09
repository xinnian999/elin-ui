<template>
  <span ref="reference" @click="handleClick"><slot /></span>
  <Teleport to="body">
    <div v-if="visible" ref="floating" :style="floatingStyles" :class="ns('popover')">Tooltip</div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject, ref, watch, nextTick } from 'vue'
import { $config, $configInit } from '@/config'
import { computePosition, flip, offset, shift, useFloating } from '@floating-ui/vue'

withDefaults(defineProps<{}>(), {})

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

const middleware = [shift(), flip(), offset(15)]

const updatePosition = () => {
  computePosition(reference.value as HTMLElement, floating.value as HTMLElement, {
    middleware, // 按需引用的中间件
    placement: 'bottom' // 指定初始化浮动位置
  }).then(({ x, y }) => {
    // computePosition根据传入参数计算目标元素和浮动元素位置，
    // 异步返回浮动元素坐标后可手动设置浮层位置
    Object.assign(floating.value.style, {
      // left: `${x}px`,
      // top: `${y}px`,
      transform: `translate(${x}px, ${y}px)`
    })
    console.log('调整位置', x, y)
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
</script>
