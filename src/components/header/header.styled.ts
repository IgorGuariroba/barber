import { styled } from '@/styles/stitches.config'
import { IoCallOutline } from 'react-icons/io5'
import { BiLogoFacebookCircle, BiTime } from 'react-icons/bi'
import {
  AiFillYoutube,
  AiOutlineArrowRight,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { PiWechatLogo } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'

export const HeaderStyled = styled('header', {
  '@tablet': {
    display: 'flex',
  },
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

export const HeaderTopItem = styled('li', {
  '@phoneMin': {
    variants: {
      isFirst: {
        true: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        },
      },
    },
  },

  '@computer': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',

    '&:nth-child(2)': {
      marginInlineEnd: 'auto',
    },
  },
})

export const IoCallOut = styled(IoCallOutline, {
  '@phoneMin': {
    fontSize: '18px',
    color: '$indianYellow',
    '--ionicon-stroke-width': '50px',
  },
  pointerEvents: 'none',
  display: 'block',
})

export const ItemTitle = styled('p', {
  '@phoneMin': {
    color: '$eerieBlack1',
    fontWeight: '$fw500',
  },
})

export const ItemLink = styled('a', {
  '@phoneMin': {
    transition: 'transition1',
    '&:hover, &:focus': {
      color: '$indianYellow',
    },

    variants: {
      secondChild: {
        true: {
          marginInlineEnd: 'auto',
        },
      },
    },
  },
})

export const StyledFacebookIcon = styled(BiLogoFacebookCircle, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledBiTime = styled(BiTime, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledYoutubeIcon = styled(AiFillYoutube, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledArrowRightIcon = styled(AiOutlineArrowRight, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledTwitterIcon = styled(AiOutlineTwitter, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledWechatLogo = styled(PiWechatLogo, {
  pointerEvents: 'none',
  display: 'block',
})

export const StyledHamburgerMenu = styled(GiHamburgerMenu, {
  pointerEvents: 'none',
  display: 'block',
})

export const Socialist = styled('ul', {
  gap: '20px',
  paddingBlock: '15px',
  display: 'flex',
  alignItems: 'center',
})

export const SocialLink = styled('a', {
  color: '$sonicSilver',
  fontSize: '15px',
  transition: '$transition1',
  '&:hover, &:focus': {
    color: 'var(--indian-yellow)',
  },
})

export const HeaderBottom = styled('div', {
  position: 'absolute',
  top: '45px',
  left: 0,
  width: '100%',
  paddingBlock: '10px',
  zIndex: 4,

  '&.active': {
    position: 'fixed',
    top: 0,
    backgroundColor: '$richBlackFogra3950',
    transform: 'translateY(-100%)',
    animation: 'slideIn 0.5s ease forwards',
  },

  [`& > ${Container}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '@tablet': {
    paddingBlock: '20px',
  },
})

export const Span = styled('span', {})

export const Logo = styled('div', {
  color: '$indianYellow',
  fontFamily: '$ffOswald',
  fontSize: '2.7rem',
  fontWeight: 'fw600',
  textTransform: 'uppercase',
  lineHeight: '1.4',

  [`& > ${Span}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const Navbar = styled('nav', {
  all: 'unset',
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

  position: 'absolute',
  paddingInline: 0,
  top: '100%',
  left: '15px',
  right: '15px',
  backgroundColor: '$richBlackFogra39',
  maxHeight: 0,
  overflow: 'hidden',
  transition: '0.15s $cubicOut',

  '&.active': {
    maxHeight: '321px',
    transitionDuration: '0.5s',
  },
})

export const NavbarList = styled('ul', {
  borderBlockStart: '1px solid $jet',
  marginBlock: '25px',
  all: 'unset',
  display: 'flex',
})

export const NavbarItem = styled('li', {
  borderBlockEnd: '1px solid $jet',
  all: 'unset',
})

export const NavbarLink = styled('a', {
  color: 'white',
  fontFamily: '$ffOswald',
  fontWeight: '$fw600',
  textTransform: 'uppercase',
  lineHeight: '1.5',
  padding: '10px 30px',
  transition: '$transition1',

  '&:hover, &:focus': {
    color: 'var(--indian-yellow)',
  },

  '@tablet': {
    paddingInline: '10px',
  },
})

export const Bottom = styled('a', {
  maxWidth: '100%',
  width: '100%',
  justifyContent: 'center',
  color: 'white',
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
    content: '',
    backgroundColor: '$eerieBlack1',
    inset: 0,
    zIndex: '-1',
    transform: 'skewY(-15deg) scaleY(0)',
    transition: '$transition',
    position: 'absolute',
    content: '',
  },

  '&:hover::before, &:focus::before': {
    transform: 'skewY(-15deg) scaleY(2.5)',
  },

  '@phoneMin': {
    padding: '13px 40px',
    position: 'absolute',
    top: '15px',
    right: '15px',
    bottom: '15px',
    width: 'max-content',
  },

  position: 'relative',
  zIndex: 1,
})
