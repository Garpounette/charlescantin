import MyImageList from "components/MyImageList";

function Galery({ Filenames }) {
  return (
    <div className="NavMargin">
      <MyImageList Filenames={Filenames} />
    </div>
  );
}

export default Galery;
