import { useState } from "react";
import { imageList } from "../datas/imageList";
import MyImageItem from "./MyImageItem";
import MyCategories from "./MyCategories";

function MyImageList() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = imageList.reduce(
    (acc, image) => (acc.includes(image.category) ? acc : acc.concat(image.category)),
    []
  );

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
              <MyImageItem img={img} name={name} />
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default MyImageList;
