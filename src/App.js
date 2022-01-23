import React from "react";
// Rotas
import { BrowserRouter } from "react-router-dom";

// Componentes
import Header from "./components/Header";
import Routers from "./Routers";

// Estilos
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
