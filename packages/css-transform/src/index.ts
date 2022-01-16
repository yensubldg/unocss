import { CSSParser } from './style/parser'

export async function transformCSS(css: string): Promise<string> {
  const style = new CSSParser(css).parse()
  return style.build()
}
