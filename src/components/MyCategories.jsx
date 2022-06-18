function MyCategories({ setActiveCategory, categories, activeCategory }) {
  return (
    <nav className="MyCategories" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li
          key="all"
          className={`breadcrumb-item${activeCategory === "" ? " active" : ""}`}
          onClick={() => setActiveCategory("")}
        >
          Toutes les catégories
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`breadcrumb-item${cat === activeCategory ? " active" : ""}`}
            onClick={(e) => setActiveCategory(e.target.childNodes[0].data)}
          >
            {cat}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default MyCategories;
