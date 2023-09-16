import { styled } from '@/styles/stitches.config'

export const SectionPricing = styled('section', {
  paddingBlock: '$sectionPadding',
  position: 'relative',

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,

  backgroundImage: 'url("/assets/images/pricing-bg.jpg")',

  '&::before': {
    position: 'absolute',
    content: '""',
    inset: 0,
    backgroundColor: '$eerieBlack285',
    mixBlendMode: 'multiply',
    zIndex: '-1',
  },
})
export const CardText = styled('p', {
  fontFamily: '$ffRubik',
  marginBlockEnd: '30px',
})

export const Container = styled('div', {
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

export const SectionTitle = styled('h2', {
  fontFamily: '$ffOswald',
  lineHeight: '1.3',
  textTransform: 'uppercase',
  color: '$white',
  fontSize: '$fs30',
  textAlign: 'center',

  '@phoneMin': {
    fontSize: '3.5rem',
  },

  '@phone': {
    fontSize: ' 4rem',
  },
})

export const SectionText = styled('p', {
  marginBlock: '15px 45px',
  color: '$white50',
  textAlign: 'center',
  fontFamily: '$ffRubik',

  '@phone': {
    maxWidth: '50ch',
    marginInline: 'auto',
  },
})

export const PricingTabContainer = styled('div', {
  backgroundColor: '$white',
  padding: '40px 5px',

  '@phone': {
    padding: '40px',
  },
})

export const TabFilter = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '3px',
  marginBlockEnd: '30px',
})
