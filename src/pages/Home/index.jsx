import * as C from './styles';
import { useState } from 'react';
import logo from '../../assets/triad.jpg';
import Google from '../../assets/google.png'
import {Button} from '../../components/Button/index.jsx'
import {HomeFooter} from '../../components/HomeFooter';




function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para alterar a visibilidade
  const handleVisibility = () => {
    setIsVisible(true);
  };

  return (
    <>
    <C.Header>
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
    < C.GreenSmoke />
        <C.ContainerLeft>
        
          <h5>#GoogleMeuNegocio</h5>
          <h1>Triad<span>Code</span> - Potencialize Sua Presença Online</h1>
          
          <C.Paragraph>Especialistas em criação de páginas personalizadas e otimização no Google Meu Negócio! Tudo o que sua empresa procura para aumentar sua visibilidade online, assim atraindo muito mais clientes. </C.Paragraph>
          <Button onClick={handleVisibility}>       
          </Button>
        </C.ContainerLeft>
        <C.ContainerRight>
          <C.Google src={Google} alt="google-logo" />
          <C.Elements  className={isVisible ? 'visible' : ''}>
            <h1>Fulano</h1>
            <p>Gostamos muito do seu serviço</p>
            
          </C.Elements>
        </C.ContainerRight>
      </C.Container>
      <HomeFooter/>
      
      </>
  );
}

export default Home;
