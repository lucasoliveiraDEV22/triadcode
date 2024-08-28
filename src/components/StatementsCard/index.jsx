import ImageAvatars from './profileAvatar.jsx';
import * as C from './style.js';

function StatementCard() {
  return (
    <C.Container>

      <C.Elements1>
        
        <ImageAvatars />

        <h1>Wanderson Rodrigues</h1>
        <p>
          A equipe otimizou minha página no Google, aumentando as vendas e
          fortalecendo minha presença online. Recomendo muito!
        </p>
      </C.Elements1>
      
    </C.Container>
  );
}

export default StatementCard;
