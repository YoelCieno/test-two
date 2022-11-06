import { mount } from '@vue/test-utils'
import TodoView from '@/views/todo/TodoView.vue'
import { expect, test } from 'vitest';

test('Completed a todo task', async() => {
  const wrapper = mount(TodoView)

  await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

  expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})