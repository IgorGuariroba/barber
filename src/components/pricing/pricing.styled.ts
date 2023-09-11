import { styled } from '@/styles/stitches.config'

export const SectionPricing = styled('section', {
  paddingBlock: '$sectionPadding',

  '&::before': {
    inset: 0,
    backgroundColor: '$eerieBlack285',
    mixBlendMode: 'multiply',
    zIndex: '-1',
  },

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  zIndex: 1,

  backgroundImage: 'url("/assets/images/pricing-bg.jpg")',
})
export const CardText = styled('p', {
  fontFamily: '$ffRubik',
  marginBlockEnd: '30px',
})
