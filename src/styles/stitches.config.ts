import { createStitches } from '@stitches/react'

export const { config, css, getCssText, globalCss, styled } = createStitches({
  theme: {
    colors: {
      gray900: '#121214',
      sonicSilver: 'hsl(0, 0%, 44%)',
      richBlackFogra3950: 'hsla(0, 0%, 5%, 0.5)',
      richBlackFogra39: 'hsl(0, 0%, 5%)',
      indianYellow10: 'hsla(36, 61%, 58%, 0.1)',
      indianYellow: 'hsl(36, 61%, 58%)',
      harvestGold: 'hsl(36, 66%, 53%)',
      eerieBlack1: 'hsl(0, 0%, 14%)',
      eerieBlack2: 'hsl(0, 0%, 12%)',
      eerieBlack285: 'hsla(0, 0%, 12%, 0.85)',
      eerieBlack3: 'hsl(0, 0%, 8%)',
      davysGray: 'hsl(210, 9%, 31%)',
      lightGray: 'hsl(0, 0%, 80%)',
      platinum: 'hsl(0, 0%, 91%)',
      black30: 'hsla(0, 0%, 0%, 0.3)',
      white10: 'hsla(0, 0%, 100%, 0.1)',
      white30: 'hsla(0, 0%, 100%, 0.3 )',
      white50: 'hsla(0, 0%, 100%, 0.5)',
      white: 'hsl(0, 0%, 100%)',
      jet: 'hsl(0, 0%, 21%)',
    },
    fonts: {
      ffOswald: 'Oswald, sans-serif',
      ffRubik: 'Rubik, sans-serif',
    },
    radii: {
      radius5: '5px',
      radius8: '8px',
    },
    fontSizes: {
      fs14: '1.4rem',
      fs40: '11rem',
      fs30: '3rem',
    },
    space: {
      sectionPadding: '120px',
    },
    transitions: {
      transition1: '0.25s ease',
      transition2: '0.5s ease',
      cubicOut: 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
    },
    fontWeights: {
      fw300: '300',
      fw500: '500',
      fw600: '600',
      fw700: '700',
    },
    shadows: {
      shadow1: '10px 0 60px hsla(0, 0%, 15%, 0.07)',
    },
  },
  media: {
    phoneMin: '(min-width: 575px)',
    phone: '(min-width: 768px)',
    tablet: '(min-width: 992px)',
    computer: '(min-width: 1200px)',
  },
})
