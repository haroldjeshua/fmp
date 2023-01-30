import { useEffect, useRef } from "react";
import { useRoutes } from "react-router-dom";

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

  const cardData = [
    {
      id: 1,
      icon: "123",
      heading: "Linear-esque Gradient  + Copy",
      subheading: "Credits: linear.com & @FonsMans",
    },
    {
      id: 2,
      icon: "456",
      heading: "Multi-Level Dropdown Menu",
      subheading: "Inspired from Chromebook Menu",
    },
    {
      id: 3,
      icon: "789",
      heading: "CSS Spinners",
      subheading: "Remix from Surjith S M",
    },
    {
      id: 4,
      icon: "123",
      heading: "Animated Loading Skeleton",
      subheading: "Credits: @delba_oliveira ",
    },
    {
      id: 4,
      icon: "123",
      heading: "Animated Loading Skeleton",
      subheading: "Credits: @delba_oliveira ",
    },
    {
      id: 4,
      icon: "123",
      heading: "Animated Loading Skeleton",
      subheading: "Credits: @delba_oliveira ",
    },
    {
      id: 4,
      icon: "123",
      heading: "Animated Loading Skeleton",
      subheading: "Credits: @delba_oliveira ",
    },
    {
      id: 4,
      icon: "123",
      heading: "Animated Loading Skeleton",
      subheading: "Credits: @delba_oliveira ",
    },
  ];

  return (
    <div
      ref={cardsRef}
      className="cards w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4"
    >
      {cardData.map((card, idx) => (
        // /card/${idx.toString().padStart(2, "0")}
        <div key={idx} className="card">
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
      ))}
    </div>
  );
};

export default Cards;
