import { CDN_URL } from "../Utils/StringConstant";

const RestroRentCard = (props) => {
    
    const { restorentInfo } = props;
    return (
        <div className="res-card">
            <h3 style={{ margin: 0, color: "blue" }}>{restorentInfo.info.name}</h3>
            <img className="res-img" width="200px" height="200px" src={CDN_URL+restorentInfo.info.cloudinaryImageId} alt="" />
            <h4 style={{ margin: 0 }}>{restorentInfo.info.cuisines?.slice(0, 3).join(' , ')}</h4>
            <h4 style={{ margin: 0 }}>Rating {restorentInfo.info.avgRating}*</h4>
            <h4 style={{ margin: 0 }}>PrepTime {restorentInfo.info.sla.slaString}mins</h4>
        </div>
    );
};

export default RestroRentCard;