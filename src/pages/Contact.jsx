import MyForm from "components/MyForm";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenue sur le formulaire de contact de Charles Cantin Photographe. Vous pouvez faire des demandes de devis ou simplement une demande de renseignement."
        />
        <title>Charles Cantin Formulaire de contact</title>
      </Helmet>
      <div className="NavMargin">
        <MyForm />
      </div>
    </>
  );
}

export default Contact;
