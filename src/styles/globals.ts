import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body{
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea,button{
    font: 400 1.6rem Roboto, sans-serif;
  }

`
