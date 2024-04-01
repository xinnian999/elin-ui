import { Button, Space, Modal } from '@/components'

declare module 'vue' {
  export interface GlobalComponents {
    EvButton: typeof Button
    EvSpace: typeof Space
    EvModal: typeof Modal
  }
}

export {}
