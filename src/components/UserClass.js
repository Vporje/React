import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " About CBC's Child Constructor")
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " About CBC Parent componentDidMount() method")
    const data = await fetch("https://api.github.com/users/vporje");
    const json = await data.json();

    this.setState ({
      userInfo: json,
    });
}
    componentDidUpdate(){
        console.log("The classs component did update..")

    }
    componentWillUnmount(){
        console.log("The classs component is unmounted")
    }
render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="userInfo">
        <img src={avatar_url} alt="" />
        <h3>Name: {name}</h3>
        <h4>Location : {location}</h4>
      </div>
    );
  }
}
export default UserClass;
