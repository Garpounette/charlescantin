import MyCarousel from "components/MyCarousel";
import MyLink from "components/MyLink";
import { Helmet } from "react-helmet-async";

function Home({ Filenames }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenue sur le site web du photographe Charles Cantin. Vous trouverez plusieurs réalisations dans la galerie ainsi que les prestations fournies."
        />
        <title>Charles Cantin HomePage</title>
      </Helmet>
      <MyCarousel Filenames={Filenames} />
      <MyLink />
    </>
  );
}

export default Home;
