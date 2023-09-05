import Image from 'next/image'
import {
  ButtonExplore,
  Container,
  HeroText,
  HeroTitle,
  Section,
  Span,
} from './main.styled'

export function Main() {
  return (
    <main>
      <article>
        <Section id="home" aria-label="home">
          <Container>
            <HeroTitle>Barbers & Hair Cutting</HeroTitle>

            <HeroText>
              Sit amet consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua suspendisse ultrices
              gravida
            </HeroText>

            <ButtonExplore href="#">
              <Span>Explore Our Services</Span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </ButtonExplore>
          </Container>
        </Section>

        <section
          className="section service"
          id="services"
          aria-label="services"
        >
          <div className="container">
            <h2 className="h2 section-title text-center">Service We Provide</h2>

            <p className="section-text text-center">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>

            <ul className="grid-list">
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-salon"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Hair Cutting Style
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-shampoo"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Hair Washing
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-hot-stone"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Body Treatments
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-treatment"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Beauty & Spa
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-shaving-razor"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Stylist Shaving
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <i className="flaticon-hair-dye"></i>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Multi Hair Colors
                    </a>
                  </h3>

                  <p className="card-text">
                    Sit amet consectetur adipisci elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>

                  <a href="#" className="card-btn" aria-label="more">
                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="section pricing has-bg-image has-before"
          id="pricing"
          aria-label="pricing"
          // style={{backgroundImage: url('/assets/images/pricing-bg.jpg')}
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                      <p className="card-text">Clean & simple 30-40 minutes</p>
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

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
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

                    <p className="card-text">Barbers & Salon Services</p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
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

                    <p className="card-text">Barbers & Salon Services</p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
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

                    <p className="card-text">Barbers & Salon Services</p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
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

                    <p className="card-text">Barbers & Salon Services</p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
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

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
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
