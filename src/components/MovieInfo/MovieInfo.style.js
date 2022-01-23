import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  /* min-height: 100vh; */
  background: ${ ({ backdrop }) => 
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
    : "var(--black)" 
  };
  background-size: cover;
  background-position: center;
  padding: 2.5rem 2rem;
  animation: animateMovieInfo ease-in-out 1s;
  display: flex;
  justify-content: center;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 320px) {
    padding: 2.5rem 0.5rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  max-width: var(--max-width);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 1.25rem;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0;
    max-height: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  color: var(--white);
  padding: 2rem 1.2rem;
  overflow: hidden;

  .movie-details {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 2fr));
  }

  h3 {
    padding: 0 0 1rem 0;
    font-size: clamp(1rem, 4vw, 1.3rem);
  }

  .movie-infos {
    display: flex;
    flex-direction: column; 
    width: 90%;

    h1.movie-title {
      padding: 0 0 1rem 0;
      font-size: clamp(var(--font-size-med), 4.5vw, var(--font-size-big));
    }

    p.movie-overview {
      font-size: clamp(0.9rem, 3.5vw, 1rem);
      padding: 0 0 1rem 0;
    }
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .rating {
    display: flex;
    flex-direction: column;

    .score {
      display: flex;
      margin: 0;
      font-weight: 800;
    }

    .score a {
      text-decoration: none;
      color: var(--white);
    }
  }

  .movie-genres ul.genre-list {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 2fr));
    padding: 0 1rem;
  }

  .director {
    p {
      margin: 0 0 0.5rem 0; 
      font-size: clamp(0.9rem, 3.5vw, 1rem);
    }
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;

    .movie-infos {
      width: 100%;

      h1.movie-title {
        width: 100%;
     }
    }
  }
`;
