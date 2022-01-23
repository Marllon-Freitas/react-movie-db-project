import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
