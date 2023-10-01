import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  //  when parent is called and constrcure is called
  //  than render is called than componentDidMount wiil be called

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>About</h1>
        <UserClass
          name="Suman Singh class"
          location="New delhi class"
          contact={"sumansinghuser@123 class"}
        />
      </div>
    );
  }
}

export default About;
