import styled from 'styled-components';

// Configurações gerais do Header ↓
export const Wrapper = styled.div ` 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-gray);
  padding: 0.8rem 2rem;

  /* Configurações gerais  mobile do Header ↓ */
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

// Configurações do conteudo do Header ↓
export const Content = styled.div ` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);

  padding: 0 1.25rem;
  margin: 0 auto;
`;

// Configurações da logo principal ↓
export const LogoImg = styled.img ` 
  width: 12.5rem;

  /* Configurações mobile da logo principal ↓ */
  @media screen and (max-width: 500px) {
    width: 9.375rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 300px) {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;

// Configurações mobile da segunda logo ↓
export const TMDBLogoImg = styled.img ` 
  width: 6.25rem;

  /* Configurações mobile da segunda logo ↓ */
  @media screen and (max-width: 500px) {
    width: 5rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 300px) {
    display: none;
  }
`;
