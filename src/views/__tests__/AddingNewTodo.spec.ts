import { mount } from '@vue/test-utils'
import TodoView from '@/views/TodoView.vue'
import { expect, test } from 'vitest';

test('Adding a new todo', async() => {
  const wrapper = mount(TodoView)
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

  await wrapper.get('[data-test="new-todo"]').setValue('New todo')
  await wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})