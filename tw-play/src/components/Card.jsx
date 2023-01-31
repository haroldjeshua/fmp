import { useParams } from "react-router-dom";
import { cardData } from "../data";

const Card = () => {
  const { id } = useParams();
  const card = cardData.find((card) => card.id === parseInt(id, 10));

  if (!card) return <h1>Card Not Found</h1>;

  return (
    <div className=" w-full max-w-3xl mx-auto flex flex-col justify-center text-center">
      <h1>{card.heading}</h1>
      <p>{card.subheading}</p>
    </div>
  );
};

export default Card;
