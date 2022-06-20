import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MyForm() {
  return (
    <Form className="MyForm row" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Nom *</Form.Label>
        <Form.Control className="MyForm__control" type="text" required name="lastname" />
      </Form.Group>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Prénom *</Form.Label>
        <Form.Control className="MyForm__control" type="text" required name="firstname" />
      </Form.Group>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Téléphone</Form.Label>
        <Form.Control className="MyForm__control" type="text" name="telephone" />
      </Form.Group>

      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Email *</Form.Label>
        <Form.Control className="MyForm__control" type="email" required name="email" />
      </Form.Group>

      <Form.Group className="MyForm__group MyForm__group-message">
        <Form.Label className="MyForm__label">Votre message *</Form.Label>
        <Form.Control className="MyForm__control" as="textarea" rows={8} required name="message" />
        <Form.Text className="text-muted">* Champs obligatoires</Form.Text>
      </Form.Group>

      <Button className="MyForm__button" type="submit">
        Submit
      </Button>
      <input type="hidden" name="form-name" value="contact" />
    </Form>
  );
}

export default MyForm;
