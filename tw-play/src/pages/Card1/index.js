import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Card1 from "./Card1";

const Card1Page = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Route exact path={path} component={Card1} />
    </div>
  );
};

export default Card1Page;
