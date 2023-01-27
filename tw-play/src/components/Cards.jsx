const Cards = () => {
  const cardData = [
    {
      icon: "123",
      heading: "Linear-esque Gradient  + Copy",
      subheading: "Credits: linear.com & @FonsMans",
      url: "/",
    },
  ];

  return (
    <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardData.map((card, idx) => (
        <div key={idx} className="card">
          <div className="card-content">
            <div className="card-icon">Card Icon</div>
            <div className="card-text">
              <h2>{card.heading}</h2>
              <p>{card.subheading}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
