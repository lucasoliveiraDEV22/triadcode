import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 10rem;
   background-color: ${theme.colors.background};
   h1{
    color: ${theme.colors.name};
    margin-bottom: 2.5rem;
    font-size: 50px;
    text-align: center;
    text-decoration: underline;
   }

   p{
    color: ${theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1rem;
   }
`

export const Advantage1 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border-bottom: .375rem dotted ${theme.colors.primary};
margin-bottom: 1rem;

h2{
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    text-decoration: underline;
}
`

export const Advantage2 = styled.div`

display: flex;
align-items: center;
flex-direction: column;
border-bottom: .375rem dotted ${theme.colors.primary};
margin-bottom: 1rem;

h2{
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    text-decoration:underline;
}`

export const Advantage3 = styled.div`

display: flex;
align-items: center;
flex-direction: column;
border-bottom: .375rem dotted ${theme.colors.primary};
margin-bottom: 1rem;

h2{
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    text-decoration:underline;
}`

export const Advantage4 = styled.div`

display: flex;
align-items: center;
flex-direction: column;
border-bottom: .375rem dotted ${theme.colors.primary};
margin-bottom: 1rem;

h2{
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    text-decoration:underline;
}`

export const Background = styled.div`
background-color: ${theme.colors.card};
padding: 3rem;
border-radius: 20px;
box-shadow: 10px 10px 38px 0px ${theme.colors.white};
`