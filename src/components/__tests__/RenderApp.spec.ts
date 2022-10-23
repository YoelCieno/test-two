import { expect, it } from 'vitest'
import { render } from 'vue'

it('Render App correctly to snapshot', () => {
  const result = render
  expect(result).toMatchSnapshot()
})