import { useParams } from "react-router-dom";
import { cardData } from "../data";

const Card = () => {
  const { id } = useParams();
  const card = cardData.find((card) => card.id === parseInt(id, 10));

  if (!card) return <h1>Card Not Found</h1>;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black z-0">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <div className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-pink-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
        <div className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-pink-500 text-white [--conic-position:from_290deg_at_center_top]"></div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-pink-500 opacity-50 blur-3xl"></div>
        <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-pink-400 blur-2xl"></div>
        <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-pink-400 blur-sm"></div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
        <p className="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50">
          CSS Tip
        </p>

        <h1 className="mt-8 bg-gradient-to-br from-white via-[#f5eaef] to-[#5f4a54] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Tailwind is a better way <br />
          to build products
        </h1>
      </div>
    </div>
  );
};

export default Card;
