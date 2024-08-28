import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

`


export const Elements1 = styled.div`
  width: 290px;
  height: max-content;
  border-radius: 5px;
  padding: 1rem;
  background: #d9d9d9;
  box-shadow: 0px 20px 35px 0px rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #000;
    font-size: 20px;
    line-height: normal;
    text-transform: capitalize;
  }

  p {
    padding-left: 1rem;
    padding-right: 0.5rem;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px; /* Para garantir espaço suficiente abaixo do parágrafo */
  }
`;


