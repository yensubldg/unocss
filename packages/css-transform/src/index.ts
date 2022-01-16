import type { UnoGenerator } from '@unocss/core'
import { CSSParser } from './style/parser'

export async function transformCSS(css: string, uno: UnoGenerator): Promise<string> {
  const style = await new CSSParser(css, uno).parse()
  return style.build()
}
