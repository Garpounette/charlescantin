import { useState } from "react";
import { imageList } from "../datas/imageList";
import MyCategories from "components/MyCategories";

function Galery() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = imageList.reduce(
    (acc, image) => (acc.includes(image.category) ? acc : acc.concat(image.category)),
    []
  );

  return (
    <div className="flux">
      <MyCategories
        setActiveCategory={setActiveCategory}
        categories={categories}
        activeCategory={activeCategory}
      />
    </div>
  );
}

export default Galery;
