import * as C from "./styles"
import { theme } from '../../styles/theme';
import BeenhereIcon from '@mui/icons-material/Beenhere';

function Advantages(){
    return(
        <>
        <C.Container>
            
        <h1>Vantagens de um Site Profissional</h1>
        <br />
        <C.Background>
            <C.Advantage1>
               <BeenhereIcon sx={{color: `${theme.colors.name}`,fontSize: '60px'}}/>
        <h2>Desempenho</h2>
        <p>Com um design planejado e personalizado que garante velocidade no carregamento, facilitando os motores de busca na exibição da sua empresa para os novos clientes.</p>
        </C.Advantage1>
        <C.Advantage2>
        <BeenhereIcon sx={{color: `${theme.colors.name}`,fontSize: '60px'}}/>
        <h2>Design Responsivo</h2>
        <p>Garantimos que seu site seja acessível e navegável em dispositivos móveis e computadores. Isso aumenta a visibilidade nas pesquisas locais, tornando-as mais acessíveis aos clientes em potencial, especialmente em dispositivos móveis.</p>
        </C.Advantage2>
        <C.Advantage3>
        <BeenhereIcon sx={{color: `${theme.colors.name}`,fontSize: '60px'}}/>
        <h2>Palavras-chave</h2>
        <p>Palavras-chave relacionadas ao seu negócio ou ao conteúdo do post pode ajudar a melhorar a visibilidade. Isso tornará seu post mais relevante para os usuários que buscam por determinados produtos ou serviços.</p>
        </C.Advantage3>
        <C.Advantage4>
        <BeenhereIcon sx={{color: `${theme.colors.name}`,fontSize: '60px'}}/>
        <h2>Sua Vitrine Virtual de Produtos e Serviços</h2>
        <p>Maior alcance da sua empresa para o público que utiliza os motores de busca procurando seus Serviços ou produtos de uma forma mais dinâmica e imediata.</p>
        </C.Advantage4>
        </C.Background>
        </C.Container>
        </>
    )
}

export default Advantages