import { styled } from '@/styles/stitches.config'

export const ShavingStyled = styled('li', {})
export const PricingCard = styled('div', {
  backgroundColor: '$indianYellow10',
  padding: '20px 25px',
  borderRadius: '$radius5',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '15px',
  height: '100%',

  '@phoneMin': {
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '30px',
  },
})

export const CardBurn = styled('figure', {
  borderRadius: '50%',
  overflow: 'hidden',
  aspectRatio: 'width height',
  backgroundColor: '$lightGray',

  $phone: {
    flexShrink: 0,
  },

  '& > img': {
    objectFit: 'cover',
  },
})

export const Wrapper = styled('div', {
  order: 1,

  '@phoneMin': {
    order: 0,
  },

  '@phone': {
    marginInlineEnd: 'auto',
  },
})

export const CarTitle = styled('h3', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  fontWeight: '$fw600',
  color: '$eerieBlack1',
  fontSize: '$fs24',
})

export const CardPrice = styled('data', {
  color: '$indianYellow',
  fontFamily: '$ffOswald',
  fontSize: '2.4rem',
  fontWeight: '$fw500',
  whiteSpace: 'nowrap',

  '@phoneMin': {
    alignSelf: 'flex-start',
    lineHeight: '1.6',
  },
})

export const CardText = styled('p', {
  fontFamily: '$ffRubik',
  marginBlockEnd: '30px',
  whiteSpace: 'nowrap',
})
