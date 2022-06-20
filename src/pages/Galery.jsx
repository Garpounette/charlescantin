import MyImageList from "components/MyImageList";

function Galery({ ImageArray }) {
  return (
    <div className="NavMargin">
      <MyImageList ImageArray={ImageArray} />
    </div>
  );
}

export default Galery;
