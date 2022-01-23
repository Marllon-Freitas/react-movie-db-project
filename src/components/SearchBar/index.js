import React, { useState, useEffect, useRef } from "react";

// Imagem
import SearchIcon from "../../images/search-icon.svg";

// Estilos
import { Wrapper, Content } from "./SearchBar.style";

export default function SearchBar({ setSearchTerm }) {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [state, setSearchTerm]);

  console.log(state);
  return (
    <>
      <Wrapper>
        <Content>
          <img src={SearchIcon} alt="search-icon" />
          <input
            onChange={(event) => {
              setState(event.currentTarget.value);
            }}
            type="text"
            name="search-movie"
            id="search-movie"
            placeholder="Procurar filme"
            value={state}
          />
        </Content>
      </Wrapper>
    </>
  );
}
