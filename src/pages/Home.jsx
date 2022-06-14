import MyCarousel from "components/MyCarousel";
import MyLink from "components/MyLink";

function Home() {
  //TODO: problème de responsive, voir si en utilisant une image à la place d'une div ...
  return (
    <>
      <MyCarousel />
      <MyLink />
    </>
  );
}

export default Home;
