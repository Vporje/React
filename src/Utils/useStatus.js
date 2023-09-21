import { useEffect, useState } from "react";


const useStatus = () => {

    //We will check if internet is active or not
    const [statusInfo, setStatusInfo] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setStatusInfo(false);
        })

        window.addEventListener("online", ()=>{
            setStatusInfo(true);
        })
    },[])

    //the statusInfo will be a boolean value..true or false
    return statusInfo;
}

export default useStatus;