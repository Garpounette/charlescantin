import MyServiceList from "components/MyServiceList";
import { Helmet } from "react-helmet-async";

function Services({ ServiceArray }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenue dans la liste des prestations de Charles Cantin Photographe. Vous trouverez des forfaits qui conviennent à différents évènement et la possibilité de faire une demande de devis."
        />
        <title>Charles Cantin Prestations</title>
      </Helmet>
      <div className="NavMargin">
        <MyServiceList ServiceArray={ServiceArray} />
      </div>
    </>
  );
}

export default Services;
