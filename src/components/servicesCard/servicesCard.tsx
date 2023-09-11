import {
  CardBtn,
  CardIcon,
  CardText,
  CardTitle,
  Container,
  GridList,
  H3Title,
  SectionServices,
  SectionText,
  ServiceCard,
  ServiceProvider,
  StyledArrowRightIcon,
} from '@/components/servicesCard/servicesCard.styled'

export function ServicesCard() {
  return (
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
                <CardTitle href="#">Estilo de Corte de Cabelo</CardTitle>
              </H3Title>

              <CardText>
                Descubra o corte de cabelo perfeito para você no nosso salão!
                Nossos cabeleireiros entendem a beleza da individualidade e
                estão prontos para destacar o seu estilo único. Ama tendências?
                Delicie-se com nossos cortes assimétricos modernos. Prefere um
                look clássico? Nosso bob chic e intemporal é perfeito. Fã do
                vintage? Temos estilos inspirados nas décadas de 50 e 60.
                Cachos? Nossos cortes valorizam a beleza natural de seu cabelo.
                Agende já e transforme seu visual conosco!
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
                <CardTitle href="#">Hidratação Profissional</CardTitle>
              </H3Title>

              <CardText>
                Cuide-se e sinta a diferença com nossos tratamentos de
                hidratação para os cabelos! Nosso tratamento penetra
                profundamente nos fios, repondo a umidade para um cabelo
                saudável, com brilho e maciez incomparáveis. Diga adeus aos fios
                secos e opacos e receba cabelos revitalizados e radiantes. Venha
                experimentar nosso tratamento de hidratação e sinta seu cabelo
                receber o amor que ele merece.
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
                <CardTitle href="#">Tratamentos Corporais Exclusivos</CardTitle>
              </H3Title>

              <CardText>
                Revitalize sua pele com nossos tratamentos corporais! Nossas
                terapias relaxantes nutrem e rejuvenescem, proporcionando-lhe
                uma pele radiante e um relaxamento profundo. Venha experimentar
                a verdadeira serenidade com nossos tratamentos corporais!
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
                <CardTitle href="#">Beleza & Spa</CardTitle>
              </H3Title>

              <CardText>
                Relaxe, rejuvenesça e renove no nosso Beleza & Spa. Nossos
                profissionais altamente qualificados cuidarão de você,
                oferecendo uma variedade de tratamentos revigorantes e
                terapêuticos para revitalizar seu corpo e alma. Venha nos
                visitar e experimente a verdadeira beleza.
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
                <CardTitle href="#">Barbeiro Estilista</CardTitle>
              </H3Title>

              <CardText>
                Transforme o seu visual com o nosso Barbeiro Estilista. De
                cortes modernos a estilos clássicos, os nossos especialistas
                oferecem um serviço de barbearia premium para garantir que você
                sempre esteja em sua melhor forma. Visite-nos para um tratamento
                exclusivo que superará suas expectativas.
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
                <CardTitle href="#">Diversas Cores de Cabelo</CardTitle>
              </H3Title>

              <CardText>
                Venha descobrir a ampla gama de cores disponíveis em nosso
                serviço de Diversas Cores de Cabelo. Nossos profissionais
                especializados estão prontos para transformar seus cabelos e
                acentuar sua personalidade única com uma cor vibrante. Deixe sua
                imaginação voar e venha experimentar uma nova cor de cabelo hoje
                mesmo!
              </CardText>

              <CardBtn href="#" aria-label="more">
                <StyledArrowRightIcon />
              </CardBtn>
            </ServiceCard>
          </li>
        </GridList>
      </Container>
    </SectionServices>
  )
}
