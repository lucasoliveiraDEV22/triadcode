import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4rem;

    h1{
        color: ${theme.colors.primary};
        text-align: center;
        margin-bottom: 2rem;
        font-size: 3rem;
        text-decoration: underline;
    }

    p{
        color: ${theme.colors.white};
        font-size: 1.8rem;
    }

    img{

        width: 350px;
        height: 350px;
        margin: 0 auto;
        border-radius: 20%;
        border: 10px double ${theme.colors.primary};
    }
`