import { useState } from "react";
import { IMG_LOGO_URL } from "../Utils/constants";

const Header = () => {

  const [btn, setBtn] = useState('Login')

  return (
    <div className="header">
      <div className="logo">
        <img src={IMG_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Category</li>
          <li>Cart</li>
          <button
            className="login-btn"
          //   onClick={() => {
          //     if (btn === 'Login'){
          //     setBtn('Logout')
          //     }
          //     else{
          //       setBtn('Login')
          //     }
          //   }
          // }
          onClick={()=>{
            btn === "Login" ? setBtn('Logout') : setBtn('Login')
          }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
