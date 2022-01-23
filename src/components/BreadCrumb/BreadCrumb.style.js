import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.7rem 0;
  color: var(--white);
  background-color: var(--med-gray);
`

export const Content = styled.div`
  display: flex;
  width: var(--max-width);
  padding: 0 1.25rem;

  a {
    text-decoration: none
  };

  span {
    color: var(--white);
    font-size: var(--font-size-med);
    margin: 0 0.5rem;
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: var(--font-size-small);
    }
  }
`