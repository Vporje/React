import { IMG_URL } from "../Utils/constants";

const RestoCard = (props) => {
  const { restodata } = props; //Object Destructuring

  const { name, cloudinaryImageId, cuisines, areaName, costForTwo, avgRating } =
    restodata?.info; //Option chaining
  return (
    <div className="w-[280px] p-4 m-4 hover:border-2 border-gray-500 bg-gray-200 rounded-xl">
      <h3 className="m-1 mb-3 font-black text-center">{name}</h3>
      <img
        className="p-2 m-auto bg-slate-400 rounded-xl"
        src={IMG_URL + restodata.info.cloudinaryImageId}
        alt="img"
      />
      <p className="m-1 font-medium text-lg">Cuisines: {cuisines.join(", ")}</p>
      <p className="m-1 font-medium text-lg">Location: {areaName}</p>
      <p className="m-1 font-medium text-lg">Price: {costForTwo}</p>
      <p className="m-1 font-medium text-lg">Rating: {avgRating}</p>
    </div>
  );
};

// Higher order component
// export const withpromotedRestoCard = (RestoCard) => {
//   return (props) => {
//     const { restdata } = props;
//     const { avgRating } = restdata?.info;
//     return (
//       <div>
//         <div>{avgRating}</div>
//         <div>
//           <RestoCard {...props} />
//         </div>
//       </div>
//     );
//   };
// };

export default RestoCard;
