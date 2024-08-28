import * as C from './styles';
import Competition from "../../assets/concorrencia.jpeg"

function Triggers() {
  return (
    <C.Container>
      <h1>Perdendo para a Concorrência!</h1>
      <p>
        Sem uma presença no Google Meu Negócio bem otimizada, sua empresa corre
        o risco de ficar invisível para os clientes locais em busca de seus
        serviços. Deixar de aparecer nos resultados de pesquisa significa perder
        oportunidades valiosas de novos negócios, enquanto seus concorrentes
        abocanham fatias importantes do mercado.
      </p>
    <br />
      <img src={Competition} alt="concorrencia-logo" />
    
    </C.Container>
  );
}

export default Triggers;
