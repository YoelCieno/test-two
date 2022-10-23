import { expect, it } from 'vitest'
import { render } from 'vue'

it('renders correctly', () => {
  const result = render
  expect(result).toMatchSnapshot()
})