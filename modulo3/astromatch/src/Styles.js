import {createGlobalStyle} from 'styled-components'


 const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: 'Poppins', sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`
export default GlobalStyle;