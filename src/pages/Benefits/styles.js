import { styled } from 'styled-components';
import { theme } from '../../styles/theme';


export const Background = styled.div`
background-color: ${theme.colors.footer};
width: 100%;
height: 100vh;

`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10rem;

  h2 {
    color: ${theme.colors.white};
    font-size: 40px;
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
`;

export const Card1 = styled.div`
  
    width: 295px;
    height: 277px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: ${theme.colors.card};
    h3 {
      font-size: 24px;
      line-height: normal;
      text-transform: capitalize;
      color: ${theme.colors.primary};
      text-align:center;
      margin-bottom: 25px;

  }

  p{
    font-size: 12px;
    color: ${theme.colors.white};
    text-align: center;

  }
`;

export const Card2 = styled.div`
   
    width: 295px;
    height: 277px;
    flex-shrink: 0;

    border-radius: 10px;
    background-color: ${theme.colors.card};
    h3 {
      font-size: 24px;
      line-height: normal;
      text-transform: capitalize;
      color: ${theme.colors.primary};
      text-align:center;
      margin-bottom: 25px;

  }

  p{
    font-size: 12px;
    color: ${theme.colors.white};
    text-align: center;

  }
  
`;
export const Card3 = styled.div`
  
    width: 295px;
    height: 277px;
    flex-shrink: 0;

    border-radius: 10px;
    background-color: ${theme.colors.card};
    h3 {
      font-size: 24px;
      line-height: normal;
      text-transform: capitalize;
      color: ${theme.colors.primary};
      text-align:center;
      margin-bottom: 25px;

  }

  p{
    font-size: 12px;
    color: ${theme.colors.white};
    text-align: center;

  }
  
`;
export const Card4 = styled.div`
  
    width: 295px;
    height: 277px;
    flex-shrink: 0;

    border-radius: 10px;
    background-color: ${theme.colors.card};
    h3 {
      font-size: 24px;
      line-height: normal;
      text-transform: capitalize;
      color: ${theme.colors.primary};
      text-align:center;
      margin-bottom: 25px;

  }

  p{
    font-size: 12px;
    color: ${theme.colors.white};
    text-align: center;

  }
  
`;
