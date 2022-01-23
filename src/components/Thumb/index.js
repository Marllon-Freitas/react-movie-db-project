import React from "react";
import { Link } from "react-router-dom";

// Estilos
import { Image } from "./Thumb.style";

export default function Thumb({ image, movieId, clickable, title }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" title={title} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" title={title} />
      )}
    </div>
  );
}
