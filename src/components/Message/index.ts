import Message from './Message.vue'
import { h, render } from 'vue'
import type { StatusType } from '@/components/common'

const createMessage = ({ type, msg }: { type?: StatusType; msg: string }) => {
  const VNode = h(Message, { type }, { default: () => msg })

  const container = document.createElement('div')

  render(VNode, container)
}

const EMessage = (msg: string) => {
  createMessage({ msg })
}

Object.assign(EMessage, {
  success: (msg: string) => createMessage({ type: 'success', msg }),
  info: (msg: string) => createMessage({ type: 'info', msg }),
  warning: (msg: string) => createMessage({ type: 'warning', msg }),
  error: (msg: string) => createMessage({ type: 'danger', msg })
})

export { EMessage }
