import { useState, useEffect, react } from "react";
import restorentsListData from "../Utils/Mock_Data";
import RestroRentCard from "./RestorentCard";
import Simmer from "./Simmer";

const Body = () => {
  const [restorentsList, setRestorentsList] = useState([]);

  useEffect(() => {
    fetchRestoretData();
  }, []);

  const fetchRestoretData = async () => {
    let clearTimer = setTimeout(() => {
      setRestorentsList([...restorentsListData]);
      clearTimeout(clearTimer);
    }, 3000);
  };

  const handleFilterTopRatedRestorents = () => {
    let filterTopRatedRes = restorentsList.filter(
      (restorent) => restorent.info.avgRating >= 4
    );
    setRestorentsList([...filterTopRatedRes]);
  };

  return (
    <div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterTopRatedRestorents}>
          Top Rated Restorents
        </button>
      </div>
      {restorentsList.length === 0 ? (
        <Simmer />
      ) : (
        <div className="restorent-container">
          {restorentsList?.map((restorent) => {
            return (
              <RestroRentCard
                key={restorent.info.id}
                restorentInfo={restorent}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
