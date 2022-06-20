import MyCarousel from "components/MyCarousel";
import MyLink from "components/MyLink";

function Home({ Filenames }) {
  return (
    <>
      <MyCarousel Filenames={Filenames} />
      <MyLink />
    </>
  );
}

export default Home;
