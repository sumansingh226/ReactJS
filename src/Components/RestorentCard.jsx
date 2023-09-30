import { Link } from "react-router-dom";
import { CDN_URL } from "../Utils/StringConstant";

const RestroRentCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    id,
    sla: { slaString },
  } = props.restorentInfo.info;

  return (
    <Link to={"/restorent/" + id} className={"linkStyle"}>
      <div className="res-card">
        <h3 style={{ margin: 0, color: "blue" }}>{name}</h3>
        <img
          className="res-img"
          width="200px"
          height="200px"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h4 style={{ margin: 0 }}>{cuisines?.slice(0, 3).join(" , ")}</h4>
        <h4 style={{ margin: 0 }}>Rating : {avgRating}*</h4>
        <h4 style={{ margin: 0 }}>PrepTime : {slaString}</h4>
      </div>
    </Link>
  );
};

export default RestroRentCard;
