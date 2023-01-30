import React from "react";
import { TbBrandTailwind } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-12 py-8 px-4 flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl flex flex-col items-center gap-4">
        <TbBrandTailwind /> Tailwind Playground
      </h1>
      <p className="text-base mt-2">Markup + styling snippets using Tailwind</p>
      <Link
        to="/cards"
        className="w-44 h-12 flex items-center justify-center gap-4 bg-card-color border border-border-color rounded-xl hover:bg-card-color/50 transition-all ease"
      >
        View Sandboxes
      </Link>
    </div>
  );
};

export default Home;
