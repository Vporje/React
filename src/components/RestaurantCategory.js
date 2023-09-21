import { useState } from "react";
import ItemDescription from "./ItemDescription";

const RestaurantCategory = ({ categoryData, showItemDescription, setShowIndexfunc, dummy}) => {
    // const [showItemDescription, setShowItemDescription] = useState(false);

  const ClickHandler = () => {
    setShowIndexfunc();
  };

  return (
    <div>
      <ul className=" my-6 bg-stone-200 py-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer border-b-4 py-4 border-zinc-600 bg-stone-400 rounded-2xl"
          onClick={ClickHandler}
        >
          <span className=" font-bold pl-3">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span className="font-extrabold pr-10 text-xl">Ξ</span>
        </div>
        <div>
          {showItemDescription && <ItemDescription itemDescription={categoryData.itemCards} dummy={dummy}/>}
        </div>
      </ul>
    </div>
  );
};

export default RestaurantCategory;
