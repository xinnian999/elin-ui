import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Button from '../index.vue'
import { namespace } from '@/config'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain(`${namespace}-button-primary`)
  })
})
