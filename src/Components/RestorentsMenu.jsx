import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import restorentsListData from "../Utils/Mock_Data";
import { CDN_URL } from "../Utils/StringConstant.js";
import RestorentShimmer from "./RestorentShimmer";

const RestorentsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let clearTimer = setTimeout(() => {
      const restorent = restorentsListData?.find(
        (res) => res.info.id === resId
      );
      setResInfo(restorent);
      clearTimeout(clearTimer);
    }, 3000);
  };

  if (resInfo === null) {
    return <RestorentShimmer />;
  }
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { slaString },
  } = resInfo?.info;

  return (
    <div className="menu">
      <h3 style={{ margin: 0, color: "blue" }}>{name}</h3>
      <img
        className="res-img"
        width="500px"
        height="500px"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h4 style={{ margin: 0 }}>{cuisines?.slice(0, 3).join(" , ")}</h4>
      <h4 style={{ margin: 0 }}>Rating : {avgRating}*</h4>
      <h4 style={{ margin: 0 }}>PrepTime : {slaString}</h4>
    </div>
  );
};

export default RestorentsMenu;