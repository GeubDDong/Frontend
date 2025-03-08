import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

#root {
    width: 100vw;
    min-width: 300px;
    max-width: 767px;
    height: 100vh;
    margin: 0 auto;
  }
  
body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }
`;
