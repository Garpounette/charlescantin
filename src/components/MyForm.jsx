import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useReducer } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function MyForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    setSubmit(false);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(setSubmit(true))
      .catch((error) => alert(error));
    e.preventDefault();
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  return submit ? (
    <div className="MyForm__submitting">Message envoyé</div>
  ) : (
    <Form className="MyForm row" onSubmit={handleSubmit}>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Nom *</Form.Label>
        <Form.Control
          className="MyForm__control"
          type="text"
          required
          name="lastname"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Prénom *</Form.Label>
        <Form.Control
          className="MyForm__control"
          type="text"
          required
          name="firstname"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Téléphone</Form.Label>
        <Form.Control
          className="MyForm__control"
          type="text"
          name="telephone"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="MyForm__group">
        <Form.Label className="MyForm__label">Email *</Form.Label>
        <Form.Control
          className="MyForm__control"
          type="email"
          required
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="MyForm__group MyForm__group-message">
        <Form.Label className="MyForm__label">Votre message *</Form.Label>
        <Form.Control
          className="MyForm__control"
          as="textarea"
          rows={8}
          required
          name="message"
          onChange={handleChange}
        />
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
