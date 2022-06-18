import { useState } from "react";
import { imageList } from "../datas/imageList";
import MyImageItem from "./MyImageItem";
import MyCategories from "./MyCategories";
import MyImageModal from "./MyImageModal";

function MyImageList() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = imageList.reduce(
    (acc, image) => (acc.includes(image.category) ? acc : acc.concat(image.category)),
    []
  );
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  return (
    <div className="MyImageList">
      <MyCategories
        setActiveCategory={setActiveCategory}
        categories={categories}
        activeCategory={activeCategory}
      />

      <ul className="MyImageList__list">
        {imageList.map(({ id, name, img, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <MyImageItem
                img={img}
                name={name}
                modalImageSrc={modalImageSrc}
                setModalImageSrc={setModalImageSrc}
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
              />
            </div>
          ) : null
        )}
      </ul>

      <MyImageModal
        modalImageSrc={modalImageSrc}
        modalIsActive={modalIsActive}
        setModalIsActive={setModalIsActive}
      />
    </div>
  );
}

export default MyImageList;
