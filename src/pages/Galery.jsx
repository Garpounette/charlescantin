import MyImageList from "components/MyImageList";
import { Helmet } from "react-helmet-async";

function Galery({ ImageArray }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenue dans la galerie de Charles Cantin Photographe. Vous trouverez des réalisations du photographe sur les différents thèmes qu'il traite."
        />
        <title>Charles Cantin Galerie</title>
      </Helmet>
      <div className="NavMargin">
        <MyImageList ImageArray={ImageArray} />
      </div>
    </>
  );
}

export default Galery;
