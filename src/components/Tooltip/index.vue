<template>
  <div ref="reference" @[triggerName]="handleOpen" style="display: contents">
    <slot />
    <Teleport to="body">
      <div
        v-show="visible"
        ref="floating"
        :style="{ ...floatingStyles, width: referenceSlot?.clientWidth + 'px' }"
        :class="ns('tooltip')"
        v-bind="$attrs"
      >
        <slot v-if="$slots.content" name="content" />
        <div v-else>{{ content }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch, nextTick, onMounted, onUnmounted, computed } from 'vue'
import { $config, $configInit } from '@/config'
import { computePosition, flip, offset, shift, useFloating } from '@floating-ui/vue'
import { debounce } from 'lodash'
import type { Placement, Trigger } from '@/components/common'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    placement?: Placement
    content?: string
    trigger?: Trigger
  }>(),
  {
    placement: 'top',
    trigger: 'hover'
  }
)

const { ns } = inject($config, $configInit)!

const reference = ref()
const referenceSlot = computed(() => reference.value?.children[0])
const floating = ref()
const { floatingStyles } = useFloating(referenceSlot, floating)

const visible = defineModel()

const triggerName = computed(() => {
  return props.trigger === 'hover' ? 'mousemove' : 'click'
})

const handleOpen = debounce(() => {
  if (props.trigger === 'click') {
    return (visible.value = !visible.value)
  }
  visible.value = true
}, 50)

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

const dismiss = debounce((event: MouseEvent) => {
  const isClickFloating = floating.value?.contains(event.target)
  const isClickReference = referenceSlot.value?.contains(event.target)

  if (!isClickFloating && !isClickReference) {
    visible.value = false
  }
}, 50)

onMounted(() => {
  window.addEventListener(triggerName.value, dismiss)
})

onUnmounted(() => {
  window.removeEventListener(triggerName.value, dismiss)
})

defineExpose({
  visible,
  referenceSlot,
  close: () => {
    visible.value = false
  }
})
</script>
