import styled from 'styled-components';

// Configurações gerais da grid ↓
export const Wrapper = styled.div `
  max-width: var(--max-width);
  padding: 0 2.5rem;
  margin: 0 auto;

  h1 {
    padding: 1.5rem 0;
    color: var(--med-gray);
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: var(--font-size-big);
    }
  }
`;

// Configurações do conteudo da grid ↓
export const Content = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  grid-gap: 2rem;
  margin-bottom: 2rem;
`;