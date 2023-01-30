import React from "react";
import Cards from "../components/Cards";
import Card from "../components/Card";
import { Route, Routes } from "react-router-dom";

const CardRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Cards />} />
        <Route path=":id" element={<Card />} />
      </Routes>
    </>
  );
};

export default CardRoutes;
