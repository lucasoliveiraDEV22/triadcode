import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`

*{ 
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    overflow-x: hidden;
}

::-webkit-scrollbar-track {
    background-color: #141414;
  }
  ::-webkit-scrollbar {
    width: 12px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #84CC16;
    border-radius: 20px;
  }



body {
        width: 100%;
        height: 100vh;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-optical-sizing: auto;
        font-style: normal;
        background-color: ${theme.colors.card};
      
}



`

