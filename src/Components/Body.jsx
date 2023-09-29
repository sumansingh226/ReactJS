import { useState, useEffect, react } from "react";
import restorentsListData from "../Utils/Mock_Data";
import RestroRentCard from "./RestorentCard";
import Simmer from "./Simmer";

const Body = () => {
  const [restorentsList, setRestorentsList] = useState([]);
  const [
    searchedFilteredRestorentsListList,
    setSearchedFilteredRestorentsListList,
  ] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    fetchRestoretData();
  }, []);

  const fetchRestoretData = async () => {
    let clearTimer = setTimeout(() => {
      setRestorentsList([...restorentsListData]);
      setSearchedFilteredRestorentsListList([...restorentsListData]);
      clearTimeout(clearTimer);
    }, 3000);
  };

  const handleFilterTopRatedRestorents = () => {
    let filterTopRatedRes = restorentsList.filter(
      (restorent) => restorent.info.avgRating >= 4
    );
    setSearchedFilteredRestorentsListList([...filterTopRatedRes]);
  };

  const handleSearchInputValue = (event) => {
    setSearchInputValue(event.target.value);
  };

  const filterSearchRestorents = () => {
    const searchedRestorents = restorentsList.filter((restro) =>
      restro.info.name
        ?.toString()
        ?.toLocaleLowerCase()
        ?.includes(searchInputValue?.toLocaleLowerCase())
    );
    setSearchedFilteredRestorentsListList([...searchedRestorents]);
  };

  const RestorentsNotFound = () => {
    return (
      <div className="empty-restorent-container">
        <div className="empty-restorent-box"> No restrents found </div>
      </div>
    );
  };

  return (
    <div>
      <div className="filter">
        <div className="serach">
          <input
            className="searc-input.input"
            placeholder="Searc restorents"
            type="text"
            value={searchInputValue}
            onChange={handleSearchInputValue}
          />
          <button className="searcBtn" onClick={filterSearchRestorents}>
            search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRatedRestorents}>
          Top Rated Restorents
        </button>
      </div>
      {restorentsList.length === 0 ? (
        <Simmer />
      ) : searchedFilteredRestorentsListList.length === 0 ? (
        <RestorentsNotFound />
      ) : (
        <div className="restorent-container">
          {searchedFilteredRestorentsListList?.map((restorent) => {
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
