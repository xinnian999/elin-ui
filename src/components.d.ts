import Button from '@/components/Button/index.vue'
import Icon from '@/components/Icon/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof Button
    FIcon: typeof Icon
  }
}

export {}
