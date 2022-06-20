import MyServiceList from "components/MyServiceList";

function Services({ ServiceArray }) {
  return (
    <div className="NavMargin">
      <MyServiceList ServiceArray={ServiceArray} />
    </div>
  );
}

export default Services;
