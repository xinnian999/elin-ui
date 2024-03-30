import { Button, Icon, Space, Modal } from '@/components'

declare module 'vue' {
  export interface GlobalComponents {
    EvButton: typeof Button
    EvIcon: typeof Icon
    EvSpace: typeof Space
    EvModal: typeof Modal
  }
}

export {}
