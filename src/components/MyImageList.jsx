import { useState, useEffect } from "react";
import MyImageItem from "./MyImageItem";
import MyCategories from "./MyCategories";
import MyImageModal from "./MyImageModal";

import ImageList from "./ImageList";

function MyImageList({ Filenames }) {
  const [activeCategory, setActiveCategory] = useState("");
  const [ImageArray, setImageArray] = useState([]);

  useEffect(() => {
    ImageList(setImageArray, Filenames);
    return setImageArray([]);
  }, []);

  const categories = ImageArray.reduce(
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
        {ImageArray.map(({ name, file, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={name + Math.random().toString(36).substr(2, 8)}>
              <MyImageItem
                file={file}
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
