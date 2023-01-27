const CardDetail = (props) => {
  const { id } = props.match.params;
  const card = cardData.find((c) => c.id === Number(id));

  return (
    <div>
      <h1>{card.heading}</h1>
      <p>{card.subheading}</p>
    </div>
  );
};

export default CardDetail;
