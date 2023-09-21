import { IMG_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const   ItemDescription = ({ itemDescription, dummy }) => {
  //   console.log(itemDescription);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action (to dispatch an action, for dispatch we need a dispatch function which we will get from a hook useDispatch() as shown above)
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemDescription.map((item) => {
        return (
          <div
            className="flex my-5 p-5 border-b-4 border-zinc-400"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <div className="my-1 font-bold">{item.card.info.name}</div>
              <div className="my-1 font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="my-1">{item.card.info.description}</p>
            </div>
            {/* onClick = {handleAddItem(item)} ..Never do this below, when the component will render the function of onClick handler will get called before the click event */}
            <div className="w-3/12">
              <button
                className="bg-stone-900 text-white px-4 py-1 rounded-xl absolute"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              <img
                className="p-1 rounded-lg shadow-lg bg-stone-300"
                src={IMG_URL + item.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDescription;
