import { styled } from '@/styles/stitches.config'
import { IoCallOutline } from 'react-icons/io5'
import { styled } from '@stitches/react'
import { BiLogoFacebookCircle, BiTime } from 'react-icons/bi'
import {
  AiFillYoutube,
  AiOutlineArrowRight,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { PiWechatLogo } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'

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

export const HeaderTopItem = styled('li', {
  display: 'none',
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
