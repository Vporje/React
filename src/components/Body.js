import RestoCard from "./RestoCard";
// import restaurantList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestos, setListOfRestos] = useState([]);
  const [searchValue] = useState([""]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestos(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
  };

  useEffect(() => {
    // console.log('useEffect is called')
    fetchData();
  }, []);

  //Conditional Rendering
  if (listofRestos.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="wrapper">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestos.filter((resto) => {
              return resto.info.avgRating > 4.0;
            });
            setListOfRestos(filteredList);
          }}
        >
          Top-Restaurants
        </button>
        <div className="search">
          <input className="inputSearch" type="text" value={searchValue} />
          <button
            className="searchBtn"
            onClick={() => {
              console.log(searchValue);
            }} 
            
          >
            Search
          </button>
        </div>
      </div>
      <div className="restContainer">
        {listofRestos.map((restaurant) => {
          return <RestoCard key={restaurant.info.id} restodata={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
