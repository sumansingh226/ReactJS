import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>About</h1>
      {/* <User
        name="Suman Singh function()"
        location="New delhi function()"
        contact={"sumansinghuser@123 function"}
      /> */}
      <UserClass
        name="Suman Singh class"
        location="New delhi class"
        contact={"sumansinghuser@123 class"}
      />
    </div>
  );
};

export default About;
