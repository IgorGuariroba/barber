import { styled } from '@/styles/stitches.config'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

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
  marginTop: 'auto',
  '&:hover, &:focus': {
    backgroundColor: '$indianYellow',
    color: '$white',
  },
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

export const CardText = styled('p', {
  fontFamily: '$ffRubik',
  marginBlockEnd: '30px',
})

export const CardTitle = styled('a', {
  marginBlock: '15px 12px',
  transition: '$transition1',

  '&:hover, &:focus': {
    color: '$indianYellow',
  },
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

export const H3Title = styled('h3', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  fontWeight: '$fw600',
  color: '$eerieBlack1',
  fontSize: '$fs24',
  marginTop: '3rem',
})

export const SectionServices = styled('section', {
  paddingBlock: '$sectionPadding',
  textAlign: 'center',
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

export const ServiceCard = styled('div', {
  backgroundColor: '$white',
  padding: '60px 25px',
  boxShadow: '$shadow1',
  borderRadius: '$radius8',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
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

export const StyledArrowRightIcon = styled(AiOutlineArrowRight, {
  pointerEvents: 'none',
  display: 'block',
  fontSize: '16px',
  '&:hover, &:focus': {
    color: '$indianYellow',
  },
})
