import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Alert from '../Alert/index.vue'
import Avatar from '../Avatar/index.vue'
import Badge from '../Badge/index.vue'
import Divider from '../Divider/index.vue'
import Empty from '../Empty/index.vue'
import Progress from '../Progress/index.vue'
import Skeleton from '../Skeleton/index.vue'
import { namespace } from '@/config'

describe('common components', () => {
  it('renders avatar initials and custom size', () => {
    const wrapper = mount(Avatar, { props: { name: 'Elin', size: 48 } })
    expect(wrapper.text()).toBe('EL')
    expect(wrapper.attributes('style')).toContain('width: 48px')
  })

  it('caps numeric badge values', () => {
    const wrapper = mount(Badge, { props: { value: 120, max: 99 } })
    expect(wrapper.text()).toBe('99+')
  })

  it('does not render an empty badge', () => {
    expect(mount(Badge).find('sup').exists()).toBe(false)
  })

  it('exposes divider semantics', () => {
    const wrapper = mount(Divider, { props: { direction: 'vertical' } })
    expect(wrapper.attributes('role')).toBe('separator')
    expect(wrapper.attributes('aria-orientation')).toBe('vertical')
  })

  it('closes an alert and emits close', async () => {
    const wrapper = mount(Alert, { props: { title: 'Notice' } })
    await wrapper.get(`.${namespace}-alert-close`).trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
    expect(wrapper.find(`.${namespace}-alert`).exists()).toBe(false)
  })

  it('normalizes progress values', () => {
    const wrapper = mount(Progress, { props: { percentage: 128 } })
    expect(wrapper.attributes('aria-valuenow')).toBe('100')
    expect(wrapper.text()).toBe('100%')
  })

  it('renders empty description', () => {
    expect(mount(Empty).text()).toContain('暂无数据')
  })

  it('switches skeleton to its content', () => {
    const wrapper = mount(Skeleton, { props: { loading: false }, slots: { default: 'Loaded' } })
    expect(wrapper.text()).toBe('Loaded')
  })
})
