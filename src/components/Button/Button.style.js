import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 25%;
  max-width: 12.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 1.25rem auto;
  cursor: pointer;
  outline: none;
  color: var(--white);
  background-color: var(--dark-gray);
  font-size: clamp(0.8rem, 2vw, var(--font-size-big));
  transition: all ease-in-out 0.4s;

  &&:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 300px) {
    width: 50%;
  }
`;
