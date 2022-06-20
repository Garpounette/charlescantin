import MyServiceCard from "./MyServiceCard";

function MyServiceList({ ServiceArray }) {
  return (
    <div className="MyServiceList row">
      {ServiceArray.map(({ name, price, description, commentaire }) => (
        <MyServiceCard
          key={name + Math.random().toString(36).substr(2, 8)}
          name={name}
          price={price}
          description={description}
          commentaire={commentaire}
        />
      ))}
    </div>
  );
}

export default MyServiceList;
