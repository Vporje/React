import {IMG_URL} from "../Utils/constants";


const RestoCard = (props) => {
  const { restodata } = props; //Object Destructuring

  const{name,cloudinaryImageId,cuisines,areaName,costForTwo,avgRating} = restodata?.info //Option chaining
  return (
    <div className="restCard">
      <h3>{name}</h3>
      <img src={IMG_URL + restodata.info.cloudinaryImageId} alt="img" />
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Location: {areaName}</p>
      <p>Price: {costForTwo}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default RestoCard;