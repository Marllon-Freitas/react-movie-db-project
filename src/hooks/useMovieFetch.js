import { useState, useEffect } from "react";

// API
import API from "../API";

// Auxiliares
import { isPersistedState } from "../helpers";

export default function useMovieFetch(movieId) {
  // Declaração dos estados
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        // Pega informações do filme e dos créditos
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // Pega somente o diretor de cada filme
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });


        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  // Escrever no sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);


  return { state, loading, error };
}
