import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeBg = styled.ellipse`

`

export const Header = styled.div`
  margin: 0;
  padding: 25px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: ${theme.colors.secondary};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 1.95rem;
  color: ${theme.colors.white};
  text-transform: capitalize;

  span {
    color: ${theme.colors.primary};
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  padding: 1rem;
`;

export const Nav = styled.nav`
  ul {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    color: ${theme.colors.white};
    gap: 1rem;
    list-style: none;
  }

  li {
    cursor: pointer;
    font-size: 23px;
  }

  li:hover {
    color: ${theme.colors.primary};
    transition: 1s ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLeft = styled.div`

  padding: 2rem;
  h5 {
    padding-left: 3rem;
    color: ${theme.colors.primary};

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    color: ${theme.colors.primary};
  }

  h1 {
    padding: 0.3rem;
    overflow-y: hidden;
    color: ${theme.colors.white};
    width: 609px;
    height: 282px;
    flex-shrink: 0;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;

    span {
      color: ${theme.colors.primary};
    }
  }
`;

export const ContainerRight = styled.div`
  margin-right: 3rem;
  overflow: visible;
`;

export const Elements = styled.div`
  position: relative; /* Para permitir o posicionamento absoluto dos elementos filhos */
  right: -100%; /* Inicia fora da tela à direita */
  transition: right 0.5s ease; /* Transição suave ao mover a div */
  bottom: 70px;
  width: 275px;
  height: 150px;
  border-radius: 5px;
  right: 20%;
  background: #d9d9d9;
  box-shadow: 0px 20px 35px 0px rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  h1 {
    color: #000;
    font-size: 20px;
    line-height: normal;
    text-transform: capitalize;
   
  }

  p {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 10px; /* Para garantir espaço suficiente abaixo do parágrafo */
  }
  &::before, /* Primeira aspa */
  &::after {
    /* Segunda aspa */
    content: '"';
    font-size: 50px;
    color: #000;
    position: absolute;
    top: 0;
  }

  &::before {
    left: 0; /* Alinha a primeira aspa à esquerda */
  }

  &::after {
    right: 0; /* Alinha a segunda aspa à direita */
    top: 110px; /* Posiciona a segunda aspa abaixo do parágrafo */
  }
  &.visible {
    right: 5%; /* Define a posição final quando visível */
  }
`;

export const Google = styled.img`
  width: 470px;
  height: 260px;
`;

export const Paragraph = styled.p`
  padding-left: 0.3rem;
  overflow-y: hidden;
  color: ${theme.colors.white};
  margin-top: 1.5625rem;
  width: 502px;
  height: 114px;
  flex-shrink: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
`;

export const GreenSmoke = styled.ellipse`
  width: 510px;
  height: 510px;
  margin-left: -217px;
  overflow-y: hidden;
  position: absolute;
  z-index: -1;
  
  bottom: 100px;
  flex-shrink: 0;
  border-radius: 510px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(132, 204, 22, 0.5) 0%,
    rgba(132, 204, 22, 0) 100%
  );
`;


