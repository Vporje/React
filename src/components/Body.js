import RestoCard, { withpromotedRestoCard } from "./RestoCard";
// import restaurantList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../Utils/useStatus";
import { API_URL } from "../Utils/constants";

const Body = () => {
  // console.log("Body rendered")
  //Whenever state variable updates, react triggers the reconciliation cycle(re-renders the component)
  const [listofRestos, setListOfRestos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState([""]);
  // console.log(listofRestos)
  // const PromotedRestoCard = withpromotedRestoCard(RestoCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestos(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if (listofRestos.length === 0) {
  //   return;
  // }
  //We can have at line 38 filteredList or listOfRestos as initially both have same data, beacause, it is fetched from API and fed to them

  const status = useStatus();

  if (status === false) {
    // console.log("Status updated...")
    return <h2>Internet is down!!!!</h2>;
  }

  return listofRestos.length === null ? (
    <Shimmer />
  ) : (
    <div className="mb-10 bg-pink-50 bg-slate-[50px]">
      <div className="flex justify-evenly items-center">
        <button
          className="m-2 px-5 py-2 bg-gray-100 text-black text-xl font-semibold rounded-xl border-gray-600 border-2"
          onClick={() => {
            const filteredList = listofRestos.filter((resto) => {
              return resto.info.avgRating > 4.0;
            });
            console.log(filteredList);
            setFilteredList(filteredList);
            // console.log(filteredList);
          }}
        >
          Top-Restaurants
        </button>
        <div>
          <div className="search">
            <input
              className=" pl-2 bg-gray-300 text-blue-950 rounded-md shadow-sm outline-1 focus:ring-1 sm:text-md tracking-widest py-2 font-bold"
              type="text"
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
            <button
              className="m-2 px-5 py-2 bg-gray-100 text-black text-xl font-semibold rounded-xl border-gray-600 border-2"
              onClick={() => {
                const filteredList = listofRestos.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                });
                setFilteredList(filteredList);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={/restaurants/ + restaurant.info.id}
            >
              {/* write the condition for promoted restaurant  */}
                <RestoCard restodata={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
