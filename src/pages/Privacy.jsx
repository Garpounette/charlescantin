import MyPrivacy from "components/MyPrivacy";

function Privacy({ name, url, uri }) {
  return (
    <div className="NavMargin">
      <MyPrivacy name={name} url={url} uri={uri} />
    </div>
  );
}

export default Privacy;
