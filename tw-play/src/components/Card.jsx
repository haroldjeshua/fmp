import { cardData } from "../data";

const Card = () => {
  const { id } = useParams();
  const card = cardData.find((card) => card.id === parseInt(id, 10));

  if (!card) return <h1>Card Not Found</h1>;

  return (
    <div>
      <h1>{card.heading}</h1>
      <p>{card.subheading}</p>
    </div>
  );
};

export default Card;
