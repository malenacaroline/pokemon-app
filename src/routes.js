import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Main, Pokedex } from "./pages";

const Routesx = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Pokedex/>} path="/pokemon/:pokemon" />
      </Routes>
    </BrowserRouter>
  )
};

export { Routesx };
