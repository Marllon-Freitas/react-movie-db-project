import styled from 'styled-components';

// Configurações gerais da imagem de destaque no home ↓
export const Wrapper = styled.div `
  background: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0) 10%, 
    rgba(0, 0, 0, 0.65) 100%
  ),
  url(${({ image }) => image}), var(--dark-gray);
  background-size: 100%, cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 34.375rem;
  position: relative;
  animation: animateHeroImage ease-in-out 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

// Configurações do conteudo da imagem de destaque no home ↓
export const Content = styled.div `
  padding: 2.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
`;

// Configurações do texto da imagem de destaque no home ↓
export const Text = styled.div `
  z-index: 100;
  position: absolute;
  max-width: 34.375rem;
  min-height: 6.25rem;
  bottom: 2.5rem;
  margin-right: 1.25rem;
  color: var(--white);

  h1 {
    margin-bottom: 1.25rem;
  }

  p {
    font-size: var(--font-size-med);
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;

    h1 {
      font-size: var(--font-size-big);
    }

    p {
     font-size: var(--font-size-small);
    }
  }
`;