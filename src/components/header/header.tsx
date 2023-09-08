'use client'
import {
  Bottom,
  Container,
  ContainerHeaderBottom,
  HeaderBottom,
  HeaderStyled,
  HeaderTop,
  HeaderTopItem,
  HeaderTopList,
  IoCallOut,
  ItemLink,
  ItemTitle,
  Logo,
  Navbar,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavToggleBtn,
  Socialist,
  SocialLink,
  Span,
  SpanLogo,
  StyledArrowRightIcon,
  StyledBiTime,
  StyledFacebookIcon,
  StyledHamburgerMenu,
  StyledTwitterIcon,
  StyledWechatLogo,
  StyledYoutubeIcon,
} from './header.styled'
import { useEffect, useState } from 'react'

export function Header() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setActive(true)
        console.log('acitve: ', true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <HeaderStyled>
      <HeaderTop>
        <Container>
          <HeaderTopList>
            <HeaderTopItem>
              <IoCallOut />
              <ItemTitle>Ligue para nós :</ItemTitle>
              <ItemLink href="tel:01234567895">012 (345) 67 895</ItemLink>
            </HeaderTopItem>

            <HeaderTopItem>
              <StyledBiTime />
              <ItemTitle>Horário de funcionamento :</ItemTitle>
              <ItemLink>Domingo - Sexta-feira, 08h - 21h</ItemLink>
            </HeaderTopItem>

            <li>
              <Socialist>
                <li>
                  <SocialLink href="#">
                    <StyledFacebookIcon />
                  </SocialLink>
                </li>

                <li>
                  <SocialLink href="#">
                    <StyledTwitterIcon />
                  </SocialLink>
                </li>

                <li>
                  <SocialLink href="#">
                    <StyledYoutubeIcon />
                  </SocialLink>
                </li>

                <li>
                  <SocialLink href="#">
                    <StyledWechatLogo />
                  </SocialLink>
                </li>
              </Socialist>
            </li>
          </HeaderTopList>
        </Container>
      </HeaderTop>
      <HeaderBottom active={active}>
        <ContainerHeaderBottom>
          <Logo>
            Barber
            <SpanLogo>Hair Salon </SpanLogo>
          </Logo>

          <Navbar active={active}>
            <NavbarList>
              <NavbarItem>
                <NavbarLink href="#home">Menu</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#services">Serviços</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#pricing">Preços</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#gallery">Catálogo</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#appointment">Agendamento</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#">Contato</NavbarLink>
              </NavbarItem>
            </NavbarList>
          </Navbar>

          <NavToggleBtn aria-label="toggle menu">
            <StyledHamburgerMenu />
          </NavToggleBtn>

          <Bottom href="#">
            <Span>Agendar Horário</Span>
            <StyledArrowRightIcon />
          </Bottom>
        </ContainerHeaderBottom>
      </HeaderBottom>
    </HeaderStyled>
  )
}
