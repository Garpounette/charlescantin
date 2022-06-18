function MyImageModal({ modalImageSrc, modalIsActive, setModalIsActive }) {
  return (
    <div
      className={`MyImageModal${modalIsActive ? " ModalActive" : " ModalInactive"}`}
      onClick={() => setModalIsActive(false)}
    >
      <img src={modalImageSrc} className="MyImageModal__image" id="modalImg" alt="" />
    </div>
  );
}

export default MyImageModal;
