function MyImageItem({ name, img, setModalImageSrc, setModalIsActive }) {
  function handleClick() {
    setModalIsActive(true);
    setModalImageSrc(img);
  }

  return (
    <li className="MyImageItem" onClick={() => handleClick()}>
      <img className="MyImageItem__image" src={img} alt={`${name}`} width="50%" />
    </li>
  );
}

export default MyImageItem;
