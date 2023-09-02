import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$white',
    fontFamily: '$body',
  },
})
