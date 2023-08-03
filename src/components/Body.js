import RestoCard from "./RestoCard";
import restaurantList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  
  // let rest = 15; // Normal varibale declared & initialised
  // let [listofRestos] = useState([]);  //local State variable declared & initialized
  const [listofRestos, setListOfRestos] = useState(restaurantList);  


  // let listOfResto = [
  //   {
  //     info: {
  //       id: "23719",
  //       name: "McDonald's",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       areaName: "Shivajinagar",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23720",
  //       name: "KFC",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       areaName: "Kothrud",
  //       costForTwo: "₹420 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 3.8,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23722",
  //       name: "Venky",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       areaName: "Ravet",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 1.5,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23721",
  //       name: "Dominos",
  //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //       areaName: "Baner",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.5,
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
          const filteredList = listofRestos.filter((resto) => {
              return resto.info.avgRating > 4.3;
            })
            setListOfRestos(filteredList);
          }}
         
        >
          Top-Restaurants
        </button>
      </div>
      <div className="restContainer">
        {listofRestos.map((restaurant) =>{
          return <RestoCard key={restaurant.info.id} restodata={restaurant}/>;
        })}
      </div>
    </div>
  );
};

export default Body;
