const RestroRentCard = (props) => {
    const { restorentInfo } = props;
    return (
        <div className="res-card">
            <h3 style={{ margin: 0, color: "blue" }}>{restorentInfo.info.name}</h3>
            <img className="res-img" width="200px" height="200px" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + restorentInfo.info.cloudinaryImageId} alt="" />
            <h4 style={{ margin: 0 }}>{restorentInfo.info.cuisines?.slice(0, 3).join(' , ')}</h4>
            <h4 style={{ margin: 0 }}>Rating {restorentInfo.info.avgRating}*</h4>
            <h4 style={{ margin: 0 }}>PrepTime {restorentInfo.info.sla.slaString}mins</h4>
        </div>
    );
};

export default RestroRentCard;