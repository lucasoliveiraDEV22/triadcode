import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

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
    padding: 1rem;
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

export const ContainerRight = styled.div``;

export const Elements = styled.div``;

export const Google = styled.img`
  width: 470px;
  height: 260px;
`;

export const Paragraph = styled.p`
padding-left: 1rem;
  color: ${theme.colors.white};
  margin-top: 1.5625rem;
  width: 502px;
  height: 114px;
  flex-shrink: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
