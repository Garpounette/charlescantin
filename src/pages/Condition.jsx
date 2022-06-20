import MyCondition from "components/MyCondition";
import { Helmet } from "react-helmet-async";

function Condition({ name, city }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Vous trouverez toutes nos conditions générales de vente."
        />
        <title>Charles Cantin CGV</title>
      </Helmet>
      <div className="NavMargin">
        <MyCondition name={name} city={city} />
      </div>
    </>
  );
}

export default Condition;
