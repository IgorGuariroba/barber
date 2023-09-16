import Image from 'next/image'
import {
  CardBurn,
  CardPrice,
  CarTitle,
  PricingCard,
  ShavingStyled,
  Wrapper,
  CardText,
} from '@/components/shaving/shaving.styled'

interface PropsShaving {
  image: string
  alt: string
  titulo: string
  description: string
  pricing: string
}

export function Shaving({
  image,
  alt,
  titulo,
  description,
  pricing,
}: PropsShaving) {
  return (
    <ShavingStyled>
      <PricingCard>
        <CardBurn>
          <Image src={image} alt={alt} width={100} height={100} />
        </CardBurn>

        <Wrapper>
          <CarTitle>{titulo}</CarTitle>

          <CardText>{description}</CardText>
        </Wrapper>

        <CardPrice value={pricing}>{pricing}</CardPrice>
      </PricingCard>
    </ShavingStyled>
  )
}
