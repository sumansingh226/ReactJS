import React from "react";

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : New delhi</h3>
      <h4>Contact : summichauhan@twitter12</h4>
    </div>
  );
};

export default User;
