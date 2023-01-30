import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed w-screen h-12 flex justify-center items-center gap-4 bg-inherit border-b-[1px] z-[2]">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cards">Playground</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
