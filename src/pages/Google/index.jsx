import * as C from './styles';
import GMN from '../../assets/google-mn.jpg'
import { Button } from '../../components/Button';



function Google() {
  return (
    <>
    <C.Container>
    <C.Image>
        <img src={GMN} alt='' />
      </C.Image>
      
      <C.Section>
      <h1>O Que é o Google Meu Negócio?</h1>
        <p>O <span>Google Meu Negócio</span> é uma poderosa plataforma gratuita que permite que sua empresa otimize sua presença online no Google. Com esta ferramenta, você pode reivindicar seu perfil de empresa, adicionar detalhes importantes, gerenciar avaliações e muito mais.</p>
        <br />
        <p>Ao utilizar o <span>Google Meu Negócio</span>, sua empresa ficará mais visível nos resultados de pesquisa do Google e no Google Maps. Isso significa que você poderá chegar a mais clientes em potencial, especialmente em dispositivos móveis, onde as pessoas pesquisam cada vez mais por serviços e produtos locais.</p>
        <br />
        <p>Além disso, o <span>Google Meu Negócio</span> ajuda a construir a confiança dos clientes, permitindo que eles vejam avaliações e informações importantes sobre sua empresa diretamente nos resultados de pesquisa. Isso influencia positivamente sua taxa de conversão.</p>
        <Button />
      </C.Section>
      </C.Container>
    </>
  );
}

export default Google;
