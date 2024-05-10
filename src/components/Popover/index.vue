<template>
  <div ref="reference" @click="handleClick" style="display: contents"><slot /></div>
  <Teleport to="body">
    <div
      v-show="visible"
      ref="floating"
      :style="{ ...floatingStyles, width: referenceSlot?.clientWidth + 'px' }"
      :class="ns('popover')"
    >
      <slot v-if="$slots.content" name="content" />
      <div v-else>{{ content }}</div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject, ref, watch, nextTick, onMounted, onUnmounted, computed } from 'vue'
import { $config, $configInit } from '@/config'
import { computePosition, flip, offset, shift, useFloating } from '@floating-ui/vue'
import type { PopoverProps } from './type'

const props = withDefaults(defineProps<PopoverProps>(), { placement: 'bottom' })

const { ns } = inject($config, $configInit)!

const reference = ref()
const referenceSlot = computed(() => reference.value?.children[0])
const floating = ref()
const { floatingStyles } = useFloating(referenceSlot, floating, {
  // strategy: 'fixed',
  middleware: []
})

const visible = ref(false)

const handleClick = () => {
  visible.value = !visible.value
}

const updatePosition = async () => {
  const { x, y } = await computePosition(referenceSlot.value, floating.value, {
    middleware: [shift(), flip(), offset(5)], // 按需引用的中间件
    placement: props.placement // 指定初始化浮动位置
  })

  console.log(x, y)

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
  const isClickReference = referenceSlot.value?.contains(event.target)

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

defineExpose({
  visible,
  referenceSlot,
  close: () => {
    visible.value = false
  }
})
</script>
