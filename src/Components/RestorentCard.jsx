import { CDN_URL } from "../Utils/StringConstant";

const RestroRentCard = (props) => {
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla: { slaString },
      } = props.restorentInfo.info;

    return (
        <div className="res-card">
            <h3 style={{ margin: 0, color: "blue" }}>{name}</h3>
            <img className="res-img" width="200px" height="200px" src={CDN_URL+cloudinaryImageId} alt="" />
            <h4 style={{ margin: 0 }}>{cuisines?.slice(0, 3).join(' , ')}</h4>
            <h4 style={{ margin: 0 }}>Rating :  {avgRating}*</h4>
            <h4 style={{ margin: 0 }}>PrepTime :  {slaString}</h4>
        </div>
    );
};

export default RestroRentCard;