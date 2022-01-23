import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  //Declaração das variáveis
  :root {
    --max-width: 80rem;
    --white: #fff;
    --black: #232323;
    --light-grey: #eee;
    --med-gray: #353535;
    --dark-gray: #1c1c1c;
    --font-size-extra-big: 2.5rem;
    --font-size-big: 1.5rem;
    --font-size-med: 1.2rem;
    --font-size-small: 1rem;
  }

  //Configurações globais
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Abel', sans-serif;
  }

  body {
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
