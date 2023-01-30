import { useParams } from "react-router-dom";

const Card = () => {
  const id = useParams();
  const card = cardData[id];
  return (
    <div>
      <h1>{card.heading}</h1>
      <p>{card.subheading}</p>
    </div>
  );
};

export default Card;
