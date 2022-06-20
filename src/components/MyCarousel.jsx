import Carousel from "react-bootstrap/Carousel";
import MyLogo from "./MyLogo";

function MyCarousel({ Filenames }) {
  return (
    <>
      <Carousel fade={true} controls={false} indicators={false} className="MyCarousel flux">
        {Filenames.map((image, index) => (
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
