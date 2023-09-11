import { styled } from '@/styles/stitches.config'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

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
    inset: 0,
    backgroundColor: '$richBlackFogra3950',
    mixBlendMode: 'multiply',
    zIndex: '-1',
  },

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'left',
  backgroundImage: 'url("/assets/images/hero-banner.jpg")',
})

export const Container = styled('div', {
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
  fontWeight: '$fw700',
  color: '$white',
  fontSize: '$fs40',

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

export const StyledArrowRightIcon = styled(AiOutlineArrowRight, {
  pointerEvents: 'none',
  display: 'block',
  fontSize: '16px',
  '&:hover, &:focus': {
    color: '$indianYellow',
  },
})

export const SectionServices = styled('section', {
  paddingBlock: '$sectionPadding',
  textAlign: 'center',
})

export const ServiceProvider = styled('h2', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  color: '$eerieBlack1',
  textTransform: 'uppercase',
  fontSize: '$fs30',
  textAlign: 'center',

  '@phoneMin': {
    fontSize: '$fs30',
  },

  '@phone': {
    fontSize: '4rem',
  },
})

export const SectionText = styled('p', {
  marginBlock: '15px 55px',
  textAlign: 'center',
  fontFamily: '$ffRubik',

  '@phone': {
    maxWidth: '50ch',
    marginInline: 'auto',
  },
})

export const GridList = styled('ul', {
  display: 'grid',
  gap: 30,
  gridAutoRows: '1fr',

  '@phone': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@tablet': {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
})

export const ServiceCard = styled('div', {
  backgroundColor: '$white',
  padding: '60px 25px',
  boxShadow: '$shadow1',
  borderRadius: '$radius8',
})

export const CardIcon = styled(Image, {
  filter:
    'invert(71%) sepia(4%) saturate(6015%) hue-rotate(351deg) brightness(104%) contrast(67%)',
  fontSize: '70px',
  lineHeight: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginInline: 'auto',
})

export const H3Title = styled('h3', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  fontWeight: '$fw600',
  color: '$eerieBlack1',
  fontSize: '$fs24',
  marginTop: '3rem',
})

export const CardTitle = styled('a', {
  marginBlock: '15px 12px',
  transition: '$transition1',

  '&:hover, &:focus': {
    color: '$indianYellow',
  },
})

export const CardText = styled('p', {
  fontFamily: '$ffRubik',
  marginBlockEnd: '30px',
})

export const CardBtn = styled('a', {
  color: '$indianYellow',
  backgroundColor: '$white',
  maxWidth: 'max-content',
  marginInline: 'auto',
  fontSize: '30px',
  padding: '15px',
  boxShadow: '$shadow2',
  borderRadius: '$radius5',
  transition: '$transition2',

  '&:hover, &:focus': {
    backgroundColor: '$indianYellow',
    color: '$white',
  },
})
