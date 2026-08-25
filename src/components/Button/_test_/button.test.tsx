import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../index.vue'
import { namespace } from '@/config'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />, {
      global: { directives: { 'click-water': () => {} } }
    })

    expect(wrapper.classes()).toContain(`${namespace}-button-primary`)
  })
})
