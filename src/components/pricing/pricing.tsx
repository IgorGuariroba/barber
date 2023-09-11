import Image from 'next/image'
import {
  CardText,
  Container,
  PricingTabContainer,
  pricingTabContainer,
  SectionPricing,
  SectionText,
  SectionTitle,
} from '@/components/pricing/pricing.styled'

export function Pricing() {
  return (
    <SectionPricing id="pricing" aria-label="pricing">
      <Container>
        <SectionTitle>Opções de Preços Incríveis</SectionTitle>

        <SectionText>
          Oferecemos uma gama variada de tratamentos com preços incríveis. De
          cortes de cabelo a massagens relaxantes, proporcionamos cuidado
          profissional e máxima satisfação. Redescubra sua beleza e renove seu
          bem-estar com nossos serviços de qualidade. Confira hoje as nossas
          opções e agende já o seu horário!
        </SectionText>

        <PricingTabContainer>
          <ul className="tab-filter">
            <li>
              <button className="filter-btn active" data-filter-btn="all">
                <div className="btn-icon">
                  <i className="flaticon-beauty-salon" aria-hidden="true"></i>
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
              <button className="filter-btn" data-filter-btn="body-treatments">
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
                  <i className="flaticon-razor-blade" aria-hidden="true"></i>
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
        </PricingTabContainer>
      </Container>
    </SectionPricing>
  )
}
