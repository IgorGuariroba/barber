import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
  },
  img: {
    display: 'block',
    height: 'auto',
  },
  span: {
    display: 'block',
  },
  data: {
    display: 'block',
  },
  input: {
    background: 'none',
    border: 'none',
    font: 'inherit',
    display: 'block',
    width: '100%',
  },
  select: {
    display: 'block',
    background: 'none',
    border: 'none',
    font: 'inherit',
    width: '100%',
  },
  button: {
    display: 'block',
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
  },
  svg: {
    display: 'block',
    pointerEvents: 'pointer',
  },
  textarea: {
    display: 'block',
    background: 'none',
    border: 'none',
    font: 'inherit',
    width: '100%',
  },
  html: {
    fontFamily: '$ffRubik',
    fontSize: '10px',
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$white',
    color: '$sonicSilver',
    fontSize: '1.6rem',
    lineHeight: 2,
  },
  ':focus-visible': {
    outlineOffset: '4px',
  },

  // correção estilo scrollbar para WebKit browsers
  '::-webkit-scrollbar': {
    width: '10px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: 'hsl(0, 0%, 98%)',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'hsl(0, 0%, 80%)',
    '&:hover': {
      backgroundColor: 'hsl(0, 0%, 70%)',
    },
  },
})
