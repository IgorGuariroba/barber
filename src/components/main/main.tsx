import Image from 'next/image'
import {
  ButtonExplore,
  CardBtn,
  CardIcon,
  CardText,
  CardTitle,
  Container,
  GridList,
  H3Title,
  HeroText,
  HeroTitle,
  Section,
  SectionServices,
  SectionText,
  ServiceCard,
  ServiceProvider,
  Span,
  StyledArrowRightIcon,
} from './main.styled'

export function Main() {
  return (
    <main>
      <article>
        <Section id="home" aria-label="home">
          <Container>
            <HeroTitle>Barbers & Hair Cutting</HeroTitle>

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

        <SectionServices id="services" aria-label="services">
          <Container>
            <ServiceProvider>Nossas Especialidades</ServiceProvider>

            <SectionText>
              Descubra nossas especialidades em cabelo, tratamento e beleza. De
              cortes a procedimentos de spa, transformamos sua aparência e
              bem-estar.
            </SectionText>

            <GridList>
              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/salao-de-beleza.svg"
                    alt="Icone de uma tesoura e pente"
                    width={70}
                    height={70}
                  />

                  <H3Title>
                    <CardTitle href="#">Hair Cutting Style</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/xampu.svg"
                    alt="Mulher lavando o cabelo"
                    width={70}
                    height={70}
                  />

                  <H3Title>
                    <CardTitle href="#">Hair Washing</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/pedra-quente.svg"
                    alt="Mulher recebendo massagem no corpo"
                    width={70}
                    height={70}
                  />

                  <H3Title>
                    <CardTitle href="#">Body Treatments</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/spa.svg"
                    alt="pedra e vela para spa"
                    width={70}
                    height={70}
                  />

                  <H3Title>
                    <CardTitle href="#">Beauty & Spa</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/navalha.svg"
                    alt="navalha utilizada para cortar cabelo"
                    width={70}
                    height={70}
                  />

                  <H3Title>
                    <CardTitle href="#">Stylist Shaving</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>

              <li>
                <ServiceCard>
                  <CardIcon
                    src="/assets/images/tintura.svg"
                    alt="pote de tinta para pintar cabelo"
                    width={70}
                    height={70}
                  />
                  <i className="flaticon-hair-dye"></i>

                  <H3Title>
                    <CardTitle href="#">Multi Hair Colors</CardTitle>
                  </H3Title>

                  <CardText>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </CardText>

                  <CardBtn href="#" aria-label="more">
                    <StyledArrowRightIcon />
                  </CardBtn>
                </ServiceCard>
              </li>
            </GridList>
          </Container>
        </SectionServices>

        <section
          className="section pricing has-bg-image has-before"
          id="pricing"
          aria-label="pricing"
        >
          <div className="container">
            <h2 className="h2 section-title text-center">
              Awesome Pricing Plan
            </h2>

            <p className="section-text text-center">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>

            <div className="pricing-tab-container">
              <ul className="tab-filter">
                <li>
                  <button className="filter-btn active" data-filter-btn="all">
                    <div className="btn-icon">
                      <i
                        className="flaticon-beauty-salon"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <p className="btn-text">All Pricing</p>
                  </button>
                </li>

                <li>
                  <button className="filter-btn" data-filter-btn="beauty-spa">
                    <div className="btn-icon">
                      <i className="flaticon-relax" aria-hidden="true"></i>
                    </div>

                    <p className="btn-text">Beauty & Spa</p>
                  </button>
                </li>

                <li>
                  <button
                    className="filter-btn"
                    data-filter-btn="body-treatments"
                  >
                    <div className="btn-icon">
                      <i className="flaticon-massage" aria-hidden="true"></i>
                    </div>

                    <p className="btn-text">Body Treatments</p>
                  </button>
                </li>

                <li>
                  <button className="filter-btn" data-filter-btn="face-washing">
                    <div className="btn-icon">
                      <i className="flaticon-spa" aria-hidden="true"></i>
                    </div>

                    <p className="btn-text">Face Washing</p>
                  </button>
                </li>

                <li>
                  <button className="filter-btn" data-filter-btn="meditations">
                    <div className="btn-icon">
                      <i className="flaticon-yoga" aria-hidden="true"></i>
                    </div>

                    <p className="btn-text">Meditations</p>
                  </button>
                </li>

                <li>
                  <button className="filter-btn" data-filter-btn="shaving">
                    <div className="btn-icon">
                      <i
                        className="flaticon-razor-blade"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <p className="btn-text">Shaving</p>
                  </button>
                </li>
              </ul>

              <ul className="grid-list">
                <li data-filter="shaving">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-1.jpg"
                        alt="Hair Cutting & Fitting"
                        width={90}
                        height={90}
                        className="img-cover"
                        layout="responsive"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Hair Cutting & Fitting</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="89">
                      $89
                    </data>
                  </div>
                </li>

                <li data-filter="shaving">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-2.jpg"
                        width="90"
                        height="90"
                        alt="Shaving & Facial"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Shaving & Facial</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="45">
                      $45
                    </data>
                  </div>
                </li>

                <li data-filter="face-washing">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-3.jpg"
                        width="90"
                        height="90"
                        alt="Hair Color & Wash"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Hair Color & Wash</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="35">
                      $35
                    </data>
                  </div>
                </li>

                <li data-filter="body-treatments">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-4.jpg"
                        width="90"
                        height="90"
                        alt="Body Massage"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Body Massage</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="56">
                      $56
                    </data>
                  </div>
                </li>

                <li data-filter="beauty-spa">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-5.jpg"
                        width="90"
                        height="90"
                        alt="Beauty & Spa"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Beauty & Spa</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="27">
                      $27
                    </data>
                  </div>
                </li>

                <li data-filter="face-washing">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-6.jpg"
                        width="90"
                        height="90"
                        alt="Facial & Face Wash"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Facial & Face Wash</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="63">
                      $63
                    </data>
                  </div>
                </li>

                <li data-filter="body-treatments">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-7.jpg"
                        width="90"
                        height="90"
                        alt="Backbone Massage"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Backbone Massage</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="43">
                      $43
                    </data>
                  </div>
                </li>

                <li data-filter="meditations">
                  <div className="pricing-card">
                    <figure
                      className="card-banner img-holder"
                      // style="--width: 90; --height: 90;"
                    >
                      <Image
                        src="/assets/images/pricing-8.jpg"
                        width="90"
                        height="90"
                        alt="Meditation & Massage"
                        className="img-cover"
                      />
                    </figure>

                    <div className="wrapper">
                      <h3 className="h3 card-title">Meditation & Massage</h3>

                      <CardText>Clean & simple 30-40 minutes</CardText>
                    </div>

                    <data className="card-price" value="74">
                      $74
                    </data>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

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
