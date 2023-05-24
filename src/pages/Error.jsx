import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404 Error</h2>
      <p>Looks like youre lost</p>
      <Link to="/">go back to homepage</Link>
    </div>
  );
}


export default Error;
