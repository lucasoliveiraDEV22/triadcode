import * as C from './styles';
// import Number1 from '../../assets/number-1.svg'
// import Number2 from '../../assets/number-2.svg'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { theme } from '../../styles/theme';
import WordGoogle from '../../components/WordGoogle';



function Benefits(){
    return (
        <>
        <C.Background>
        <C.Title>
            <h2>Benefícios do <WordGoogle /> Meu Negócio!</h2>
        </C.Title>
        <C.Container>
        <C.Card1>
            <LocationOnRoundedIcon sx={{fontSize: '40px', color: `${theme.colors.alert}`}}/>
            <h3>Maior Visibilidade</h3>
            <p>Quem não é visto, não é lembrado! Construir e estabelecer sua presença online é uma ferramenta para que você gere maior reconhecimento para sua empresa em pesquisas locais no Google. Aumente a visibilidade na pesquisa local do Google, atraindo clientes da sua região.</p>
        </C.Card1>
        <C.Card2>
        <LocationOnRoundedIcon sx={{fontSize: '40px', color: `${theme.colors.alert}`}}/>
            <h3>Atrair clientes</h3>
            <p>Com fotos dos seus produtos e serviços e descrições detalhadas, o Google oferece uma apresentação visual atraente da sua empresa. Isso ajuda a conquistar a confiança dos clientes em potencial, incentivando-os a escolher sua empresa em vez da concorrência</p>
        </C.Card2>
        <C.Card3>
        <LocationOnRoundedIcon sx={{fontSize: '40px', color: `${theme.colors.alert}`}}/>
            <h3>Obter avaliações</h3>
            <p>As avaliações e classificações fornecidas por clientes anteriores têm um grande impacto na decisão de compra de novos clientes. O Google permite que os clientes deixem avaliações e depoimentos sobre sua experiência de compra. Ajudando a construir uma reputação positiva e a confiança dos consumidores.</p>
        </C.Card3>
        <C.Card4>
        <LocationOnRoundedIcon sx={{fontSize: '40px', color: `${theme.colors.alert}`}}/>
            <h3>Melhorar a presença nas pesquisas</h3>
            <p>Uma ferramenta poderosa que auxilia empresas a aumentar a visibilidade local. Assim como, atrair mais clientes, obter avaliações positivas e melhorar sua presença nas pesquisas do Google, contribuindo para o sucesso e o crescimento dos negócios.</p>
        </C.Card4>
        </C.Container>
        </C.Background>
        </>
    )
}

export default Benefits