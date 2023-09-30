import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>About</h1>
      <User name="Suman Singh function()" />
      <UserClass name="Suman Singh class" />
    </div>
  );
};

export default About;
