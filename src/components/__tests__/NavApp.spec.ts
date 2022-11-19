import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import NavApp from '../NavApp.vue';

// If you need to mock router
// vi.mock('vue-router', () => ({
//   resolve: vi.fn(),
// }));

test('Renders a profile link', () => {
  const wrapper = mount(NavApp, { props: { admin: false } })

  // Here we are implicitly asserting that the
  // element #profile exists.
  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toEqual('My Profile')
})

test('Does not render an admin link', () => {
  const wrapper = mount(NavApp, { props: { admin: false } })

  // Using `wrapper.get` would throw and make the test fail.
  expect(wrapper.find('#admin').exists()).toBe(false)
})

test('Renders an admin link', () => {
  const wrapper = mount(NavApp, { props: { admin: true } })

  // Using `wrapper.get` would throw and make the test fail.
  // Again, by using `get()` we are implicitly asserting that
  // the element exists.
  expect(wrapper.get('#admin').text()).toEqual('Admin')
})