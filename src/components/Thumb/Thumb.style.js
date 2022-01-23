import styled from 'styled-components';

// Configurações da imagem da capa do filme ↓
export const Image = styled.img `
  width: 100%;
  height: 100%;
  max-width: 45rem;
  object-fit: cover;
  border-radius: 1.25rem;
  transition: all ease-in-out 0.5s;
  animation: animateThumbImage ease-in-out 1s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbImage {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;