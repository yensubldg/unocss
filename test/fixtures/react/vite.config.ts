import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
// eslint-disable-next-line no-restricted-imports
import { presetIcons, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
    React(),
  ],
})
