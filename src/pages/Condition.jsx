import MyCondition from "components/MyCondition";
function Condition({ name, city }) {
  return (
    <div className="NavMargin">
      <MyCondition name={name} city={city} />
    </div>
  );
}

export default Condition;
