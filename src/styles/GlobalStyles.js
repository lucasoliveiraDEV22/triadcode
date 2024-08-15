import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`

*{ 
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}



body {
    
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-optical-sizing: auto;
        font-style: normal;
        background-color: ${theme.colors.card};
      
}



`

