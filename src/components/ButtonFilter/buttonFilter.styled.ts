import { styled } from '@/styles/stitches.config'

export const ButtonFilterStyled = styled('button', {
  color: '$eerieBlack1',
  fontFamily: '$ffOswald',
  fontSize: '$fs14',
  fontWeight: '$fw600',
  textTransform: 'uppercase',
  minWidth: '130px',
  paddingBlock: '12px',
  border: '1px solid $platinum',
  transition: '$transition1',
  borderRadius: '4px',

  variants: {
    active: {
      true: {
        backgroundColor: '$indianYellow',
        borderColor: '$indianYellow',
        color: 'white',
      },
    },
  },

  '@computer': {
    minWidth: '178px',
  },
})

export const BtnText = styled('p', {})
export const BtnIcon = styled('div', {
  display: 'block',
  fontSize: '55px',
  lineHeight: '1',
  marginBlockEnd: '5px',
})
