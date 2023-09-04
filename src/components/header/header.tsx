import {
  Container,
  HeaderStyled,
  HeaderTop,
  HeaderTopItem,
  HeaderTopList,
  IoCallOut,
  ItemLink,
  ItemTitle,
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

            <li className="header-top-item">
              <StyledBiTime />

              <p className="item-title">Opening Hour :</p>

              <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
            </li>
            <li>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <StyledFacebookIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <StyledTwitterIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <StyledYoutubeIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <StyledWechatLogo />
                  </a>
                </li>
              </ul>
            </li>
          </HeaderTopList>
        </Container>
      </HeaderTop>
      <div className="header-bottom" data-header>
        <div className="container">
          <a href="#" className="logo">
            Barber
            <span className="span">Hair Salon</span>
          </a>

          <nav className="navbar container" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#services" className="navbar-link" data-nav-link>
                  Services
                </a>
              </li>

              <li className="navbar-item">
                <a href="#pricing" className="navbar-link" data-nav-link>
                  Pricing
                </a>
              </li>

              <li className="navbar-item">
                <a href="#gallery" className="navbar-link" data-nav-link>
                  Gallery
                </a>
              </li>

              <li className="navbar-item">
                <a href="#appointment" className="navbar-link" data-nav-link>
                  Appointment
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="nav-toggle-btn"
            aria-label="toggle menu"
            data-nav-toggler
          >
            <StyledHamburgerMenu />
          </button>

          <a href="#" className="btn has-before">
            <span className="span">Appointment</span>
            <StyledArrowRightIcon />
          </a>
        </div>
      </div>
    </HeaderStyled>
  )
}
