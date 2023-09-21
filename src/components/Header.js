import { useEffect, useState } from "react";
import { IMG_LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../Utils/useStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const status = useStatus();

  //We will use SELECTOR to subscribe to the store.

  const cartItems = useSelector((store) => {return store.cart.items});
  // here it will take a selector function as argument and when it is called it will returns the store's state; while returning, it should be mandatory to provide a specific portion of store(here it is >> store.cart.items; means we are returning the items inside the cart slice of a store; this function's return is now in sync with the header cart >> means changes in store will reflected in the header cart; so the cartItems variable is in sync with the store's cart items)
  // console.log(cartItems);
  
  return (
    <div className="flex justify-between bg-lime-100 ">
      <div className="logo">
        <img className="w-24 m-4" src={IMG_LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex">
          <li className="m-2 p-2 text-lg font-medium ">
            Status: {status === true ? "Active" : "Inactive"}
          </li>
          <li className="m-2 p-2 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2 text-lg font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 p-2 text-lg font-medium">
            <Link to="/category">Category</Link>
          </li>
          <li className="m-2 p-2 text-lg font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart"><li className="m-2 p-2 text-lg font-bold">Cart ({cartItems.length} Items)</li></Link>
          <li>
            <button
              className="m-2 mr-6 px-4 py-2 border-fuchsia-950 border-2 rounded-xl bg-yellow-300 font-bold"
              //   onClick={() => {
              //     if (btn === 'Login'){
              //     setBtn('Logout')
              //     }
              //     else{
              //       setBtn('Login')
              //     }
              //   }
              // }
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
