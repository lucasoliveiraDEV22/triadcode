import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const ButtonHome = styled.button`
  display: flex;
  overflow-y: hidden;
  width: 252px;
  height: 63px;
  padding: 10px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 1rem;
  margin-top: 3.125rem;
  border-radius: 8px;
  background: #84cc16;
  cursor: pointer;
  transition: background 0.3s ease; /* Adiciona uma transição suave para o background */

  h2 {
    color: #0c0a09;
    font-size: 20px;
    text-align: start;
    line-height: normal;
    text-transform: capitalize;
    width: 163px;
  }

  &:hover {
    background: ${theme.colors.name} /* Cor de fundo ao passar o mouse */
  }

  &:active {
    background: #4d7c0f; /* Cor de fundo ao clicar */
  }


`;
