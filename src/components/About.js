import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{

  constructor(props){
    super(props);
    console.log("About CBC Parent Constructor")
  }

  componentDidMount(){
    console.log("About CBC Parent componentDidMount() method")
    // Here we will write code for API calling;
  }

  render(){
    console.log("About CBC Parent Render")
    return(
      <div>
      <h2>About Us</h2>
      <h4>This is a e-commerce APP </h4>
      <UserClass />
      <UserClass />
      <UserClass />
    </div>
    )
  }
}



export default About;
