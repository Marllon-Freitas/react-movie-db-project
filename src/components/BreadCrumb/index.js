import React from "react";
import { Link } from "react-router-dom";

// Estilos
import { Wrapper, Content } from "./BreadCrumb.style";

export default function BreadCrumb({ movieTitle }) {
  return (
    <>
      <Wrapper>
        <Content>
          <Link to="/" title="Voltar a página principal">
            <span>Home</span>
          </Link>
          <span>|</span>
          <span>{movieTitle}</span>
        </Content>
      </Wrapper>
    </>
  );
}
