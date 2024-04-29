import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Button from './index.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain('elin-button-primary')
  })
})

// test('it should work', () => {
//   const { getByText } = render(<Button type="primary" />)
//
//   // 断言输出
//   getByText('...')
// })
