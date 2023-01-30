import React from "react";
import Cards from "../components/Cards";

const CardRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<CardLayout />}>
          <Route index element={<Cards />} />
          <Route path=":id" element={<Card />} />
        </Route>
      </Routes>
    </>
  );
};

export default CardRoutes;
