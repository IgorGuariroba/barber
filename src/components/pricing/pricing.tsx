import Image from 'next/image'
import {
  CardText,
  Container,
  GrdList,
  PricingTabContainer,
  SectionPricing,
  SectionText,
  SectionTitle,
  TabFilter,
} from './pricing.styled'
import { ButtonFilter } from '@/components/ButtonFilter/buttonFilter'
import { CardIcon } from '@/components/servicesCard/servicesCard.styled'
import { Shaving } from '@/components/shaving/shaving'

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
            <ButtonFilter
              active={true}
              data-filter-btn="all"
              text="Todos os Preços"
            >
              <CardIcon
                src="/assets/images/salao-de-beleza.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="white"
              />
            </ButtonFilter>

            <ButtonFilter text="Beleza e Spa" data-filter-btn="beauty-spa">
              <CardIcon
                src="/assets/images/spa.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="black"
              />
            </ButtonFilter>

            <ButtonFilter text="Massagem" data-filter-btn="body-treatments">
              <CardIcon
                src="/assets/images/pedra-quente.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="black"
              />
            </ButtonFilter>

            <ButtonFilter text="Hidratação" data-filter-btn="face-washing">
              <CardIcon
                src="/assets/images/xampu.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="black"
              />
            </ButtonFilter>

            <ButtonFilter text="Meditação" data-filter-btn="meditations">
              <CardIcon
                src="/assets/images/spa.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="black"
              />
            </ButtonFilter>

            <ButtonFilter text="Corte" data-filter-btn="shaving">
              <CardIcon
                src="/assets/images/navalha.svg"
                alt="Icone de uma tesoura e pente"
                width={50}
                height={50}
                color="black"
              />
            </ButtonFilter>
          </TabFilter>

          <GrdList>
            <Shaving
              image="/assets/images/pricing-1.jpg"
              alt="Rapaz recebendo um corte de cabelo"
              titulo="Hair Cutting & Fitting"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 89,00"
            ></Shaving>

            <Shaving
              image="/assets/images/pricing-2.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Shaving & Facial"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 45,00"
            ></Shaving>

            <Shaving
              image="/assets/images/pricing-3.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Hair Color & Wash"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 35,00"
            ></Shaving>

            <Shaving
              image="/assets/images/pricing-4.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Body Massage"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 56,00"
            ></Shaving>

            <Shaving
              image="/assets/images/pricing-5.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Beauty & Spa"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 27,00"
            ></Shaving>

            <Shaving
              data-filter="face-washing"
              image="/assets/images/pricing-6.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Facial & Face Wash"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 63,00"
            ></Shaving>

            <Shaving
              data-filter="body-treatments"
              image="/assets/images/pricing-7.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Backbone Massage"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 43,00"
            ></Shaving>

            <Shaving
              data-filter="meditations"
              image="/assets/images/pricing-8.jpg"
              alt="Rapaz Cortando a barba"
              titulo="Meditation & Massage"
              description="Limpo & simples 30-40 minutos"
              pricing="R$ 74,00"
            ></Shaving>
          </GrdList>
        </PricingTabContainer>
      </Container>
    </SectionPricing>
  )
}
