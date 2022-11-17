import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import NavApp from '../NavApp.vue';

test('renders a profile link', () => {
  const wrapper = mount(NavApp)

  // Here we are implicitly asserting that the
  // element #profile exists.
  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toEqual('My Profile')
})

test('does not render an admin link', () => {
  const wrapper = mount(NavApp)

  // Using `wrapper.get` would throw and make the test fail.
  expect(wrapper.find('#admin').exists()).toBe(false)
})