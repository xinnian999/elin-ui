import Button from '@/components/Button/index.vue'
import Icon from '@/components/Icon/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    EvButton: typeof Button
    EvIcon: typeof Icon
  }
}

export {}
