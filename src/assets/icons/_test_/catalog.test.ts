import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import * as catalog from '../catalog'
import { IconHome, IconSettings, IconUser } from '../catalog'

describe('icon catalog', () => {
  it('exports a broad set of common icons', () => {
    expect(Object.keys(catalog).length).toBeGreaterThanOrEqual(280)
    expect(IconHome).toBeTruthy()
    expect(IconSettings).toBeTruthy()
    expect(IconUser).toBeTruthy()
  })

  it('forwards lucide presentation props', () => {
    const wrapper = mount(IconHome, { props: { size: 32, color: '#2563eb', strokeWidth: 1.5 } })
    expect(wrapper.attributes('width')).toBe('32')
    expect(wrapper.attributes('height')).toBe('32')
    expect(wrapper.attributes('stroke')).toBe('#2563eb')
    expect(wrapper.attributes('stroke-width')).toBe('1.5')
  })
})
