import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #fdfcdc;
    font-family: 'Sora', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  /* input {
    outline: none;
  } */

  a {
    text-decoration: none;
  }
`;