import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../Utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestoMenu = () => {

  const dummy = "dummy data"

  const { restoId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const menuCard = useRestaurantMenuData(restoId);
  if (menuCard === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, areaName, sla } =
    menuCard?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    menuCard?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(categories);

  return (
    <div className="bg-zinc-50 w-8/12 m-auto">
      <div className="pl-3">
        <p className="font-bold text-2xl text-left py-2">{name}</p>
        <span className="font-normal text-left text-base py-2">
          {cuisines.join(", ")}
        </span>
        <p className="font-normal text-left text-base">
          {areaName}, {sla?.lastMileTravelString}
        </p>
      </div>
      {/* Category Accordions */}
      <div>
        
        {categories.map((category,index) => {
          return (
            <div key={index}>
              {
                <RestaurantCategory
                dummy = {dummy}
                  categoryData={category?.card?.card}
                  // showItemDescription = {index === 0 ? true:false} 
                  // or we can write above line as also showItemDescription = {index === 0 && true}
                  showItemDescription = {index === showIndex ? true:false} 
                  setShowIndexfunc = {()=>{
                    setShowIndex(index)}}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoMenu;
