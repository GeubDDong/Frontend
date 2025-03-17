import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'KCC-Hanbit';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

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
    font-family: 'KCC-Hanbit';
  }

  .Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--default {
    background-color: #3191ff;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
