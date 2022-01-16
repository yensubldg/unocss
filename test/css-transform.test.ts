import { describe, expect, test } from 'vitest'
import { transformCSS } from '@unocss/css-transform'

describe('css-transform', () => {
  test('basic', async() => {
    expect(
      await transformCSS('.btn { @apply p4 rounded;}'),
    )
      .toMatchInlineSnapshot(`
".btn {
  @apply p4 rounded;
}"`)
  })
})
