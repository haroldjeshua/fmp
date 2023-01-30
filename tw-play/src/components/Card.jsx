import { useOutletContext, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <h1>
      Card {id} ({obj.hello})
    </h1>
  );
};

export default Card;
