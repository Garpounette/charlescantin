import { serviceList } from "../datas/serviceList";
import MyServiceCard from "./MyServiceCard";

function MyServiceList() {
  return (
    <div className="MyServiceList row">
      {serviceList.map(({ id, name, price, description, commentaire }) => (
        <MyServiceCard
          id={id}
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
