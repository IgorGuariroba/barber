import { styled } from '@/styles/stitches.config'

export const Section = styled('section', {
  paddingBlock: '$sectionPadding',
  paddingBlockStart: 'calc(100px + 40px)',

  '@phoneMin': {
    paddingBlockStart: 'calc($sectionPadding + 80px)',
  },

  '@tablet': {
    paddingBlockStart: 'calc(150px + 100px)',
  },

  '@computer': {
    backgroundPosition: 'left',
    paddingBlockEnd: '200px',
  },

  position: 'relative',
  zIndex: 1,

  '&::before': {
    position: 'absolute',
    content: '',
  },

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url("/assets/images/hero-banner.jpg")',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: '15px',

  '@phoneMin': {
    maxWidth: '540px',
    width: '100%',
    marginInline: 'auto',
  },
  '@phone': {
    maxWidth: '720px',
  },
  '@tablet': {
    maxWidth: '960px',
  },
  '@computer': {
    maxWidth: '1200px',
  },
})

export const HeroTitle = styled('h1', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  textTransform: 'uppercase',
  fontWeight: '$fw600',
  color: '$white',
  fontSize: 'fs40',

  '@tablet': {
    maxWidth: '680px',
  },

  '@computer': {
    maxWidth: '680px',
  },
})

export const HeroText = styled('p', {
  color: '$white',
  marginBlock: '15px 40px',

  '@phoneMin': {
    fontSize: '$fs18',
  },

  '@tablet': {
    maxWidth: '600px',
  },

  '@computer': {
    maxWidth: '680px',
  },
})

export const ButtonExplore = styled('a', {
  color: '$white',
  backgroundColor: '$indianYellow',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  maxWidth: 'max-content',
  padding: '10px 25px',
  fontFamily: '$ffOswald',
  fontSize: '$fs14',
  fontWeight: '$fw600',
  textTransform: 'uppercase',
  borderRadius: '$radius5',
  overflow: 'hidden',

  '&::before': {
    backgroundColor: '$eerieBlack1',
    inset: 0,
    zIndex: '-1',
    transform: 'skewY(-15deg) scaleY(0)',
    transition: '$transition2',
  },

  '&:hover::before, &:focus::before': {
    transform: 'skewY(-15deg) scaleY(2.5)',
  },

  // maxWidth: '100%',
  width: '100%',
  justifyContent: 'center',

  '@phoneMin': {
    padding: '13px 40px',
  },

  '@tablet': {
    display: 'flex',
  },
})

export const Span = styled('span', {})
