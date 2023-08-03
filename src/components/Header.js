import { IMG_LOGO_URL } from "../Utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};


export default Header;