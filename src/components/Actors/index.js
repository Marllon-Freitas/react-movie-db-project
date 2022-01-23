import React from "react";

// Estilos
import { Wrapper, Image } from "./Actors.style";

export default function Actors({ name, character, imageUrl }) {
  return (
    <>
     <Wrapper>
       <Image src={imageUrl} alt="imagem dos atores/atrizes" />
       <h3>{name}</h3>
       <p>{character}</p>
     </Wrapper>
    </>
  );
}
