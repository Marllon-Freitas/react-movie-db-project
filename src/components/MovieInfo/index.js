import React from "react";

// Configurações
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//Auxiliares
import { convertMoney, calcTime } from "../../helpers";

// Componentes
import Thumb from "../Thumb";

// Imagem
import noPosterImage from "../../images/no_image.jpg";

// Estilos
import { Wrapper, Content, Text } from "./MovieInfo.style";

export default function MovieInfo({ movie }) {
  console.log(movie);
  return (
    <>
      <Wrapper backdrop={movie.backdrop_path}>
        <Content>
          <Thumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noPosterImage
            }
            clickable={false}
          >
            {movie.title}
          </Thumb>
          <Text>
            <div className="movie-infos">
              <h1 className="movie-title">{movie.title}</h1>
              <h3>Resumo:</h3>
              <p className="movie-overview">{movie.overview}</p>
            </div>

            <div className="movie-details">
              <div className="rating">
                <h3>Avaliação:</h3>
                <div className="score">
                  <a
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    title="Imdb"
                    alt="Link para o IMDB"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {movie.vote_average}/10
                  </a>
                </div>
              </div>
              <div className="director">
                <h3>Direção:</h3>
                {movie.directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
              <div className="release-date">
                <h3>Data de lançamento:</h3>
                {movie.release_date}
              </div>
              <div className="movie-genres">
                <h3>Gêneros:</h3>
                <ul className="genre-list">
                  {movie.genres.map((genres) => (
                    <li key={genres.id}>{genres.name}</li>
                  ))}
                </ul>
              </div>
              <div className="movie-length">
                <h3>Duração:</h3>
                {calcTime(movie.runtime)}
              </div>
              <div className="movie-budget">
                <h3>Orçamento:</h3>
                {convertMoney(movie.budget)}
              </div>
              <div className="movie-revenue">
                <h3>Lucro:</h3>
                {convertMoney(movie.revenue)}
              </div>
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
}
