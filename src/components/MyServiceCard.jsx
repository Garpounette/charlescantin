import Card from "react-bootstrap/Card";

function MyServiceCard({ name, price, description, commentaire }) {
  return (
    <Card className="MyServiceCard">
      <Card.Body>
        <Card.Title className="MyServiceCard__title">{name}</Card.Title>
        <Card.Subtitle
          className={`mb-2 text-muted MyServiceCard__subtitle${
            price === 0 ? " MyServiceCard__small" : ""
          }`}
        >
          {price !== 0 ? price + " €" : "sur mesure"}
        </Card.Subtitle>
        <Card.Text className="MyServiceCard__text">{description}</Card.Text>
        {commentaire !== "" ? (
          <Card.Text className="MyServiceCard__commentaire">{commentaire}</Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default MyServiceCard;
