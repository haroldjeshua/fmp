import { Link, Route, Routes } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-screen h-12 flex justify-center items-center gap-4 bg-card-color border-b-2 border-border-color z-[2]">
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
