import  { useState ,react } from "react";
import restorentsListData from "../Utils/Mock_Data";
import RestroRentCard from "./RestorentCard";

const Body = () => {

   const [restorentsList , setRestorentsList] = useState(restorentsListData);

  const handleFilterTopRatedRestorents = (()=>{
        let filterTopRatedRes = restorentsList.filter((restorent)=> restorent.info.avgRating >= 4)
        setRestorentsList([...filterTopRatedRes])

  })
  return (
    <div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterTopRatedRestorents}>
          Top Rated Restorents
        </button>
      </div>
      <div className="restorent-container">
        {restorentsList?.map((restorent) => {
          return (
            <RestroRentCard  key={restorent.info.id} restorentInfo={restorent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
