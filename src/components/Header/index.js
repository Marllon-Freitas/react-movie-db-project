import React from "react";
import { Link } from "react-router-dom";

// Imagens
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb-logo.svg";

// Estilos
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

export default function Header() {

  return (
    <>
      <Wrapper>
        <Content>
          <Link to="/">
            <LogoImg src={RMDBLogo} alt="RMDB logo" />
          </Link>
          <TMDBLogoImg src={TMDBLogo} alt="TMDB logo" />
        </Content>
      </Wrapper>
    </>
  );
}
