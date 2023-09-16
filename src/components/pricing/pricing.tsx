import Image from 'next/image'
import {
  CardText,
  Container,
  PricingTabContainer,
  SectionPricing,
  SectionText,
  SectionTitle,
  TabFilter,
} from './pricing.styled'
import { ButtonFilter } from '@/components/ButtonFilter/buttonFilter'
import { CardIcon } from '@/components/servicesCard/servicesCard.styled'

export function Pricing() {
  return (
    <SectionPricing id="pricing" aria-label="pricing">
      <Container>
        <SectionTitle>Opções de Preços Incríveis</SectionTitle>

        <SectionText>
          Oferecemos uma gama variada de tratamentos com preços incríveis. De
          cortes de cabelo a massagens relaxantes, proporcionamos cuidado
          profissional e máxima satisfação.
        </SectionText>

        <PricingTabContainer>
          <TabFilter>
            <li>
              <ButtonFilter
                active={true}
                data-filter-btn="all"
                text="All Pricing"
              >
                <CardIcon
                  src="/assets/images/salao-de-beleza.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="white"
                />
              </ButtonFilter>
            </li>

            <li>
              <ButtonFilter text="Beauty & Spa" data-filter-btn="beauty-spa">
                <CardIcon
                  src="/assets/images/spa.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="black"
                />
              </ButtonFilter>
            </li>

            <li>
              <ButtonFilter
                text="Body Treatments"
                data-filter-btn="body-treatments"
              >
                <CardIcon
                  src="/assets/images/pedra-quente.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="black"
                />
              </ButtonFilter>
            </li>

            <li>
              <ButtonFilter text="Face Washing" data-filter-btn="face-washing">
                <CardIcon
                  src="/assets/images/xampu.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="black"
                />
              </ButtonFilter>
            </li>

            <li>
              <ButtonFilter text="Meditations" data-filter-btn="meditations">
                <CardIcon
                  src="/assets/images/spa.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="black"
                />
              </ButtonFilter>
            </li>

            <li>
              <ButtonFilter text="Shaving" data-filter-btn="shaving">
                <CardIcon
                  src="/assets/images/navalha.svg"
                  alt="Icone de uma tesoura e pente"
                  width={50}
                  height={50}
                  color="black"
                />
              </ButtonFilter>
            </li>
          </TabFilter>

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
