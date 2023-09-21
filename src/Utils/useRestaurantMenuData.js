import { useEffect, useState } from "react"
import { FETCH_URL } from "../Utils/constants";

const useRestaurantMenuData = (restoId) =>{
    //fetching the data
    const [menuCard, setMenuCard] = useState(null);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(FETCH_URL + restoId);
        // console.log(data)
        
        const json = await data.json();
        setMenuCard(json.data);
    };
    //here we have to create a state variable to store the data
    return menuCard;
}

export default useRestaurantMenuData;