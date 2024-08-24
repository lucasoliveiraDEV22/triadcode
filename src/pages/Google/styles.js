import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.card};
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
`;

export const Image = styled.div`
  min-width: 30%;
  height: 100%;
  padding-left: 3rem;

  img {
    border-radius: 20px;
    width: 35rem;
    height: 35rem;
  }
`;

export const Section = styled.div`
  max-width: 50%;
  h1 {
    color: ${theme.colors.primary};
    font-weight: 600;
    padding-bottom: 1.5rem;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    gap: 9px;
    
  }
  p {
    color: ${theme.colors.white};
    text-align: center;
    font-weight: 400;
    padding-right: 0.6rem;
    font-size: 1rem;
  }

  span {
    color: ${theme.colors.primary};
    font-weight: 700;
  }
`;
