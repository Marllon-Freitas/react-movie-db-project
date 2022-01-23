import { useState, useEffect } from "react";

// API
import API from "../API";

// Auxiliares
import { isPersistedState } from "../helpers";

// Estado inicial das coisas
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export default function useHomeFetch() {
  // Declaração dos estados
  const [searchTerm, setSearchTerm] = useState("");
  const [movieState, setMovieState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Busca os filmes na API
  async function fetchMovies(page, searchTerm = "") {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setMovieState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  // Renderização inicial e busca de filmes
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        setMovieState(sessionState);
        return;
      }
    }
    setMovieState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Carregar mais filmes
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(movieState.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, movieState.page, searchTerm]);

  // Escrever no sessionStorage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(movieState));
    }
  }, [searchTerm, movieState]);

  return {
    movieState,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
}
