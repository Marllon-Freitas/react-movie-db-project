import styled from 'styled-components'

export const Spinner = styled.div`
  border: 5px solid var(--light-grey);
  border-top: 5px solid var(--med-gray);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: spin 1s linear infinite;
  margin: 1.25rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(60deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;