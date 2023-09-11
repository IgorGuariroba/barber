import Image from 'next/image'
import {
  ButtonExplore,
  CardText,
  Container,
  HeroText,
  HeroTitle,
  Section,
  Span,
  StyledArrowRightIcon,
} from './main.styled'
import { Pricing } from '@/components/pricing/pricing'
import { ServicesCard } from '@/components/servicesCard/servicesCard'

export function Main() {
  return (
    <main>
      <article>
        <Section id="home" aria-label="home">
          <Container>
            <HeroTitle>Respeito & Identidade Valorizada</HeroTitle>

            <HeroText>
              No nosso salão de cabeleireiro, não apenas renovamos visuais, mas
              também a confiança e a autoestima de nossos clientes. Com uma
              equipe talentosa e dedicada, estamos prontos para fazer de você a
              melhor versão de si mesmo. Agende seu horário hoje e veja a
              diferença acontecer!
            </HeroText>

            <ButtonExplore href="#">
              <Span>Veja o Que Oferecemos</Span>
              <StyledArrowRightIcon />
            </ButtonExplore>
          </Container>
        </Section>

        <ServicesCard />
        <Pricing />

        <section
          className="section gallery"
          id="gallery"
          aria-label="photo gallery"
        >
          <div className="container">
            <div className="title-wrapper">
              <div>
                <h2 className="h2 section-title">Latest Photo Gallery</h2>

                <p className="section-text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>

              <a href="#" className="btn has-before">
                <span className="span">Explore More Gallery</span>

                <StyledArrowRightIcon />
              </a>
            </div>

            <ul className="grid-list">
              <li>
                <div className="gallery-card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 422; --height: 550;"
                  >
                    <Image
                      src="/assets/images/gallery-1.jpg"
                      width="422"
                      height="550"
                      loading="lazy"
                      alt="Hair Cutting"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h3 card-title">Hair Cutting</h3>

                    <CardText>Barbers & Salon Services</CardText>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <StyledArrowRightIcon />
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="gallery-card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 422; --height: 550;"
                  >
                    <Image
                      src="/assets/images/gallery-2.jpg"
                      width="422"
                      height="550"
                      loading="lazy"
                      alt="Hair Cutting"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h3 card-title">Hair Cutting</h3>

                    <CardText>Barbers & Salon Services</CardText>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <StyledArrowRightIcon />
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="gallery-card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 422; --height: 550;"
                  >
                    <Image
                      src="/assets/images/gallery-3.jpg"
                      width="422"
                      height="550"
                      loading="lazy"
                      alt="Hair Cutting"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h3 card-title">Hair Cutting</h3>

                    <CardText>Barbers & Salon Services</CardText>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <StyledArrowRightIcon />
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="gallery-card">
                  <figure
                    className="card-banner img-holder"
                    // style="--width: 422; --height: 550;"
                  >
                    <Image
                      src="/assets/images/gallery-4.jpg"
                      width="422"
                      height="550"
                      loading="lazy"
                      alt="Hair Cutting"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3 className="h3 card-title">Hair Cutting</h3>

                    <CardText>Barbers & Salon Services</CardText>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <StyledArrowRightIcon />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="section appoin"
          id="appointment"
          aria-label="appointment"
        >
          <div className="container">
            <div className="appoin-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 250; --height: 774;"
              >
                <Image
                  src="/assets/images/appoin-banner-1.jpg"
                  width="250"
                  height="774"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h2 className="h2 section-title">Make Appointment</h2>

                <p className="section-text">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt labore dolore magna aliqua suspendisse
                </p>

                <form action="" className="appoin-form">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                      className="input-field"
                    />

                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email Address"
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="input-field"
                    />

                    <select name="category" className="input-field">
                      <option value="Select category">Select category</option>
                      <option value="Beauty & spa">Beauty & spa</option>
                      <option value="Body massage">Body massage</option>
                      <option value="Shaving & Facial">Shaving & Facial</option>
                      <option value="Hair Color">Hair Color</option>
                    </select>
                  </div>

                  <input
                    type="date"
                    name="date"
                    required
                    className="input-field date"
                  />

                  <textarea
                    name="message"
                    placeholder="Write Message"
                    required
                    className="input-field"
                  ></textarea>

                  <button type="submit" className="form-btn">
                    <span className="span">Appointment Now</span>

                    <StyledArrowRightIcon />
                  </button>
                </form>
              </div>

              <figure
                className="card-banner img-holder"
                // style="--width: 250; --height: 774;"
              >
                <Image
                  src="/assets/images/appoin-banner-2.jpg"
                  width="250"
                  height="774"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />
              </figure>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
