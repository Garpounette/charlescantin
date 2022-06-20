import MyPrivacy from "components/MyPrivacy";
import { Helmet } from "react-helmet-async";

function Privacy({ name, url, uri }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Vous trouverez la politique de confidentialité appliquée à notre site web et à la gestion des données."
        />
        <title>Charles Cantin Politique de confidentialité</title>
      </Helmet>
      <div className="NavMargin">
        <MyPrivacy name={name} url={url} uri={uri} />
      </div>
    </>
  );
}

export default Privacy;
