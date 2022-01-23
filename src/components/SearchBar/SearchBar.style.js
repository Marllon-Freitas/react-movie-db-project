import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2.5rem;
  background-color: var(--dark-gray);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 50%;
  max-width: var(--max-width);
  border-radius: 40px;
  color: var(--white);
  background-color: var(--med-gray);

  img {
    width: 1.5rem;
    margin: 0.5rem;
  }

  input {
    font-size: clamp(1rem, 1.4vw, var(--font-size-big));
    width: 100%;
    border: none;
    outline: none;
    color: var(--white);
    background: transparent;
    padding: 0.5rem;
  }
`;