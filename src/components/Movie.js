import React from "react";
import { useParams } from "react-router-dom";

// Configurações
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Componentes
import Grid from "./MovieGrid";
import LoadSpinner from "./LoadSpinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Actors from "./Actors";

// Hook
import useMovieFetch from "../hooks/useMovieFetch";

// Imagem
import noPosterImage from "../images/no_image.jpg";

export default function Movie() {
  // Pegando o Id do filme através da URL da página
  const { movieId } = useParams();

  // Trazendo as informações que foram exportadas no hook
  const { state, loading, error } = useMovieFetch(movieId);

  if (loading) return <LoadSpinner />;
  if (error) return <div>Algo deu errado...</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.title} />
      <MovieInfo movie={state} />
      <Grid header="Atores">
        {state.actors.map((actor) => (
          <Actors
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noPosterImage
            }
          ></Actors>
        ))}
      </Grid>
    </>
  );
}
