import Google from '../../assets/google.png';
import logo from '../../assets/triad.jpg';
import { HomeFooter } from '../../components/HomeFooter';
import * as C from './styles';

function Home() {
  return (
    <>
      <C.Header>
        <C.Title>
          Triad<span>Code</span>
        </C.Title>
        <C.Nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Nossos Trabalhos</li>
            <li>Depoimentos</li>
            <li>Contato</li>
          </ul>
        </C.Nav>
        <C.Image src={logo} alt='logo' />
      </C.Header>
      <C.Container>
        <C.GreenSmoke />
        <C.ContainerLeft>
          <h5>#GoogleMeuNegocio</h5>
          <h1>
            Triad<span>Code</span> - Especialistas em criação de páginas
            personalizadas e otimização no Google Meu Negócio
          </h1>

          <C.Paragraph> Potencialize Sua Presença Online</C.Paragraph>
        </C.ContainerLeft>
        <C.ContainerRight>
          <C.Google src={Google} alt='google-logo' />
        </C.ContainerRight>
      </C.Container>
      <HomeFooter />
    </>
  );
}

export default Home;
