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
  Socialist,
  SocialLink,
  Span,
  StyledArrowRightIcon,
  StyledBiTime,
  StyledFacebookIcon,
  StyledHamburgerMenu,
  StyledTwitterIcon,
  StyledWechatLogo,
  StyledYoutubeIcon,
} from './header.styled'

export function Header() {
  return (
    <HeaderStyled>
      <HeaderTop>
        <Container>
          <HeaderTopList>
            <HeaderTopItem isFirst={true}>
              <IoCallOut />
              <ItemTitle>Call Us :</ItemTitle>
              <ItemLink href="tel:01234567895">012 (345) 67 895</ItemLink>
            </HeaderTopItem>

            <HeaderTopItem>
              <StyledBiTime />
              <ItemTitle>Opening Hour :</ItemTitle>
              <p>Sunday - Friday, 08 am - 09 pm</p>
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
      <HeaderBottom>
        <ContainerHeaderBottom>
          <Logo>
            Barber
            <Span>Hair Salon </Span>
          </Logo>

          <Navbar>
            <NavbarList>
              <NavbarItem>
                <NavbarLink href="#home">Home</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#services">Services</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#pricing">Pricing</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#gallery">Gallery</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#appointment">Appointment</NavbarLink>
              </NavbarItem>

              <NavbarItem>
                <NavbarLink href="#">Contact</NavbarLink>
              </NavbarItem>
            </NavbarList>
          </Navbar>

          <button className="nav-toggle-btn" aria-label="toggle menu">
            <StyledHamburgerMenu />
          </button>

          <Bottom href="#">
            <Span>Appointment</Span>
            <StyledArrowRightIcon />
          </Bottom>
        </ContainerHeaderBottom>
      </HeaderBottom>
    </HeaderStyled>
  )
}
