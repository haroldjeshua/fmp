import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { cardData } from "../data";

const Cards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.onmousemove = (e) => {
      for (const card of cards.querySelectorAll(".card")) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    return () => {
      cards.onmousemove = null;
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="cards w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4"
    >
      {cardData.map((card, idx) => (
        <Link key={idx + 1} to={`/card/${idx + 1}`}>
          <div className="card">
            <div className="card-content">
              <div className="card-icon mb-2">{`${(idx + 1)
                .toString()
                .padStart(2, "0")}`}</div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg leading-tight">{card.heading}</h2>
                <p className="text-xs">{card.subheading}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
