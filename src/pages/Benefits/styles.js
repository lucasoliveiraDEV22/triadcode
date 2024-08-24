import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Background = styled.div`
  background-color: ${theme.colors.background};
  width: 100vw;
  height: 100%;
  overflow-y: hidden;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 3rem;

  h2 {
    color: ${theme.colors.white};
    font-size: 40px;
    display: flex;
    flex-direction: row;
    gap: 9px;
  }

  span {
    color: ${theme.colors.primary};
  }
`;

export const Container = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.25rem;
  overflow-y: hidden;
  overflow: visible;
  padding-bottom: 5rem;
`;

export const Card1 = styled.div`
  width: 295px;
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 38px 0px ${theme.colors.primary};

  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${theme.colors.card};
 
  h3 {
    font-size: 24px;
    line-height: normal;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    text-align: center;
    overflow: hidden;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    transition:  .8s ease-in-out;
  }
`;

export const Card2 = styled.div`
  width: 295px;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${theme.colors.card};
  box-shadow: 10px 10px 38px 0px ${theme.colors.primary};
  h3 {
    font-size: 24px;
    line-height: normal;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    text-align: center;
    overflow: hidden;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    text-align: center;
    overflow: hidden;
  }
  &:hover {
    transform: scale(1.05);
    transition:  .8s ease-in-out;
  }
`;
export const Card3 = styled.div`
  width: 295px;
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${theme.colors.card};
  box-shadow: 10px 10px 38px 0px ${theme.colors.primary};
  h3 {
    font-size: 24px;
    line-height: normal;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    text-align: center;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    text-align: center;
  }
  &:hover {
    transform: scale(1.05);
    transition:  .8s ease-in-out;
  }
`;
export const Card4 = styled.div`
  width: 295px;
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${theme.colors.card};
  box-shadow: 10px 10px 38px 0px ${theme.colors.primary};
  h3 {
    font-size: 24px;
    line-height: normal;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    text-align: center;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    text-align: center;
  }
  &:hover {
    transform: scale(1.05);
    transition:  .8s ease-in-out;
  }
`;
