import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error:404</h1>
      <h3>oops something went wrong.</h3>
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;
