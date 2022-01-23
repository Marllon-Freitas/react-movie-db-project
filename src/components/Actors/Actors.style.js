import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--dark-gray);
  border-radius: 1.25rem;
  text-align: center;
  padding: 0.4rem;

  h3, p {
    padding: 0.7  rem 0 0 0;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 80%;
  max-width: 45rem;
  object-fit: cover;
  border-radius: 1.25rem;
  transition: all ease-in-out 0.5s;
  animation: animateActorImage ease-in-out 1s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateActorImage {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`