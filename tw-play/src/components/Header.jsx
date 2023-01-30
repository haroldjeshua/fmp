import { TbBrandTailwind } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-12 py-8 px-4 flex flex-col justify-center items-center">
      <h1 className="text-5xl flex flex-col items-center gap-4">
        <TbBrandTailwind /> Tailwind Playground
      </h1>
      <p className="text-base mt-2">Markup + styling snippets using Tailwind</p>
    </div>
  );
};

export default Header;
