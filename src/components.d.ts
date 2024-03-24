import Button from '@/components/Button/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof Button
  }
}

export {}
