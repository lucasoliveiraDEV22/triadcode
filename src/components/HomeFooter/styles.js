import { styled } from 'styled-components';
import { theme } from '../../styles/theme';


export const Footer = styled.div`
  width: 100vw;
  height: 110px;
  flex-shrink: 0;
  overflow-y: hidden;
  background: linear-gradient(270deg, #000 1.94%, #1b1715 44.97%);
`;

export const ContainerFooter = styled.div`
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 4rem;
`;

export const TitleFooter = styled.h3``;

export const Whatsapp = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;

export const Email = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;

export const ContainerOne = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ContainerTwo = styled.div`
  display: flex;  
  gap: 7px;
 
`;


