import { styled } from '@/styles/stitches.config'

export const HeaderStyled = styled('header', {
  display: 'flex',
})

export const HeaderTop = styled('div', {
  '@phoneMin': {
    maxWidth: '600px',
    width: '100%',
    marginInline: 'auto',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 4,
    backgroundColor: '$white',
    borderRadius: '0 0 20px 20px',
  },
  '@phone': {
    maxWidth: '780px',
  },
  '@tablet': {
    maxWidth: '1020px',
  },
  '@computer': {
    maxWidth: '1260px',
  },
})

export const Container = styled('div', {
  paddingInline: '15px',
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

export const HeaderTopList = styled('ul', {
  '&:hover, &:focus': {
    color: '$indianYellow',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  color: '$sonicSilver',
  paddingBlock: '15px',
  fontSize: '15px',
  transition: '$transition1',
  '@phoneMin': {
    justifyContent: 'space-between',
  },
  '@computer': {
    gap: 30,
  },
})
