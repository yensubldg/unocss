import { describe, expect, test } from 'vitest'
import { transformCSS } from '@unocss/css-transform'
import { createGenerator } from '@unocss/core'
import presetUno from '@unocss/preset-uno'

describe('css-transform', () => {
  const uno = createGenerator({
    presets: [
      presetUno({
        dark: 'media',
      }),
    ],
  })

  test('basic', async() => {
    expect(await transformCSS(
      '.btn { @apply p4 rounded text-lg font-mono; }',
      uno,
    ))
      .toMatchInlineSnapshot(`
  ".btn {
    padding: 1rem;
    border-radius: 0.25rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\\"Liberation Mono\\",\\"Courier New\\",monospace;
  }"
  `)
  })
})
