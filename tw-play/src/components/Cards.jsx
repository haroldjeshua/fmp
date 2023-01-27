const Cards = () => {
  document.querySelector(".cards").onmousemove = (e) => {
    for (const card of document.querySelectorAll(".card")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const cardData = [
    {
      icon: "123",
      heading: "Linear-esque Gradient  + Copy",
      subheading: "Credits: linear.com & @FonsMans",
      url: "/",
    },
  ];

  return (
    <div className="cards w-screen max-w-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
      {cardData.map((card, idx) => (
        <div key={idx} className="card">
          <div className="card-content">
            <div className="card-icon mb-2">Card Icon</div>
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
