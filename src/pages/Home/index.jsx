import * as C from './styles';
import logo from '../../assets/triad.jpg';
import Google from '../../assets/google.png'
import {Button} from '../../components/Button/index.jsx'

function Home() {
  return (
    <><C.Header>
      <C.Title>Triad<span>Code</span></C.Title>
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
        <C.ContainerLeft>
          <h5>#GoogleMeuNegocio</h5>
          <h1>Triad<span>Code</span> - Potencialize Sua Presença Online</h1>
          <C.Paragraph>Especialistas em criação de sites personalizados e otimização no Google Meu Negócio para aumentar sua visibilidade e atrair mais clientes.</C.Paragraph>
          <Button>       
          </Button>
        </C.ContainerLeft>
        <C.ContainerRight>
          <C.Google src={Google} alt="google-logo" />
          <C.Elements>
            <h1>Fulano</h1>
            <p>Gostamos muito do seu serviço</p>
          </C.Elements>
        </C.ContainerRight>
      </C.Container></>
  );
}

export default Home;
