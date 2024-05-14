import { type App, nextTick } from 'vue'
import type { $Config } from '@/config'

const clickWater = (app: App<Element>, config: $Config) => {
  const handle = async (el: HTMLElement) => {
    await nextTick()
    const { ns } = config

    el.classList.add(ns('click-water'))

    el.addEventListener('mousedown', (e: MouseEvent) => {
      const { left, top } = el.getBoundingClientRect()
      el.style.cssText = `--x:${e.clientX - left}px;--y:${e.clientY - top}px`
    })
  }
  app.directive('click-water', {
    mounted: handle,
    updated: handle
  })
}

export default clickWater
