function MyImageItem({ name, file, setModalImageSrc, setModalIsActive }) {
  function handleClick() {
    setModalIsActive(true);
    setModalImageSrc(file);
  }

  return (
    <li className="MyImageItem" onClick={() => handleClick()}>
      <img className="MyImageItem__image" src={file} alt={`${name}`} width="50%" />
    </li>
  );
}

export default MyImageItem;
