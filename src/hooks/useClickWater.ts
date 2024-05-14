import { inject, nextTick, onMounted, type Ref } from 'vue'
import { $config, $configInit } from '@/config'

const useClickWater = (el: Ref<HTMLElement>) => {
  const { ns } = inject($config, $configInit)!

  onMounted(async () => {
    await nextTick()
    el.value.classList.add(ns('click-water'))

    el.value.addEventListener('mousedown', (e: MouseEvent) => {
      const { left, top } = el.value.getBoundingClientRect()
      el.value.style.cssText = `--x:${e.clientX - left}px;--y:${e.clientY - top}px`
    })
  })
}

export default useClickWater
