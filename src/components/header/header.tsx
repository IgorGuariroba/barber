import {
  Container,
  HeaderStyled,
  HeaderTop,
  HeaderTopItem,
  HeaderTopList,
  IoCallOut,
  ItemLink,
  ItemTitle,
} from './header.styled'
import { BiLogoFacebookCircle, BiTime } from 'react-icons/bi'
import {
  AiFillYoutube,
  AiOutlineArrowRight,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { PiWechatLogo } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'

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
              <BiTime />

              <p className="item-title">Opening Hour :</p>

              <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
            </li>
            <li>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <BiLogoFacebookCircle />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <AiOutlineTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <AiFillYoutube />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <PiWechatLogo />
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
            <GiHamburgerMenu />
          </button>

          <a href="#" className="btn has-before">
            <span className="span">Appointment</span>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </HeaderStyled>
  )
}
