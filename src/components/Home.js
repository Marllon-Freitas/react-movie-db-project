import React from "react";

// Configurações
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

// Componentes
import HeroImage from "./HeroImage";
import MovieGrid from "./MovieGrid";
import Thumb from "./Thumb";
import LoadSpinner from "./LoadSpinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// Hook
import useHomeFetch from "../hooks/useHomeFetch";

// Imagem
import noPosterImage from "../images/no_image.jpg";

export default function Home() {
  // Hook personalizado
  const {
    movieState,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log(movieState);

  if (error) {
    return (
      <div>Deu bosta</div>
    )
  }

  return (
    <>
      {movieState.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieState.results[0].backdrop_path}`}
          title={movieState.results[0].title}
          text={movieState.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid header={searchTerm ? "Resultado da Pesquisa" : "Filmes Populares"}>
        {movieState.results.map((movies) => {
          return (
            <Thumb
              style={{cursor: 'pointer'}}
              key={movies.id}
              title={movies.title}
              movieId={movies.id}
              clickable
              image={
                movies.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movies.poster_path}`
                  : noPosterImage
              }
            >
              {movies.title}
            </Thumb>
          );
        })}
      </MovieGrid>
      {loading && <LoadSpinner />}
      {movieState.page < movieState.total_pages && !loading && (
        <Button text="Load More" callback={() => {setIsLoadingMore(true)}} />
      )}
    </>
  );
}
