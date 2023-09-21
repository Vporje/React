import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../Utils/constants";
import { clearCart, removeItem, removeSpecificItem } from "../Utils/cartSlice";

const Cart = () => {
  //In this cart we need to read the data, which is in the cart slice, so we will use a SELECTOR
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveSpecificItem = (id) => {
    dispatch(removeSpecificItem(id));
  };

  return (
    <div className="w-7/12 m-auto">
      <h2 className="text-center my-2 font-bold text-2xl">Cart Items</h2>
      <div className="text-right my-2 font-bold text-xl">
        <button
          className="bg-stone-800 text-white rounded-lg py-1 px-2 m-1"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className="text-center m-10">
          {cartItems.length == 0 && (
            <h3>Cart is Empty, Add items to Cart!!!</h3>
          )}
        </div>
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <div
              className="my-5 p-5 border-b-4 border-zinc-400"
              key={item.card.info.id}
            >
              <div className="text-left my-1 font-bold">
                {item.card.info.name}
              </div>
              <div className="text-left my-1 font-bold">
                {item.card.info.id}
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row w-10/12">
                  <div className="m-2 w-10/12 text-justify">
                    {item.card.info.description}
                  </div>
                  <div>
                    <img
                      className="w-10/12 p-2 m-2 rounded-lg shadow-lg bg-stone-300"
                      src={IMG_URL + item.card.info.imageId}
                    />
                  </div>
                </div>
                <div className="w-2/12 flex flex-col justify-start">
                  <div className=" my-2 font-bold">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                  <div>
                    <button
                      className="bg-stone-900 text-white px-4 py-1 rounded-xl"
                      onClick={() =>
                        handleRemoveSpecificItem(item.card.info.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
