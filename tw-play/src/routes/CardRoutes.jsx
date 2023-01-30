import React from "react";
import Cards from "../components/Cards";
import Card from "../components/Card";
import { Route, Routes } from "react-router-dom";
import Card1 from "../cards/Card1";
import Card2 from "../cards/Card2";

const CardRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Cards />} />
        <Route path="cards/:id" element={<Card />} />
        <Route path="/cards/1" component={Card1} />
        <Route path="/cards/2" element={<Card2 />} />
      </Routes>
    </>
  );
};

export default CardRoutes;
