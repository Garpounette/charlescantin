import Carousel from "react-bootstrap/Carousel";
import MyLogo from "./MyLogo";

function MyCarousel() {
  let images = [];
  let list = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);
  list.keys().map((item) => images.push(list(item)));

  return (
    <>
      <Carousel fade={true} controls={false} indicators={false} className="MyCarousel flux">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="MyCarousel__image" src={image} alt="" />
          </Carousel.Item>
        ))}
        <div>
          <MyLogo />
        </div>
      </Carousel>
    </>
  );
}

export default MyCarousel;
