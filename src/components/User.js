import { useState } from "react"; 

const User = ({name, gender,component}) => {
    
    let [count1, setCount1] = useState(0);
    
    //Updating the count1
    const increaseCount = ()=>{
        setCount1((prevCount)=>{
            console.log(prevCount);
            return prevCount + 1;
        })
    }
    //Updating the count2
    let [count2, setCount2] = useState(11);

    return (
        <div className="userInfo">
            <h3>{name}</h3>
            <h4>{gender}</h4>
            <h4>{component}</h4>
            <button onClick={increaseCount}>Click to Increase</button>
            <h2>Count : {count1}</h2>
            <h2>Count : {count2}</h2>
        </div>
    )
}
export default User;