import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoView from '@/views/TodoView.vue'

describe('TodoView', () => {
  it('renders properly and contain text', () => {
    const wrapper = mount(TodoView)
    const todoEl = wrapper.get('[data-test="todo"]')
    expect(todoEl.text()).toContain('Learn Vue.js 3')
  })
  
})