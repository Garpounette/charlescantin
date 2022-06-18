function MyImageItem({ id, name, img, category }) {
  function handleClick() {
    alert(`Vous voulez acheter 1 ? Très bon choix 🌱✨`);
  }

  return (
    <li className="MyImageItem" key={id} onClick={() => handleClick()}>
      <img className="MyImageItem__image" src={img} alt={`${name}`} width="50%" />
    </li>
  );
}

export default MyImageItem;
