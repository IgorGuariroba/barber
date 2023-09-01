import { createStitches } from '@stitches/react'

export const { config, css, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      gray900: '#121214',
      white: '#fff',
    },
    fonts: {
      roboto: 'var(--font-roboto)',
    },
  },
})
