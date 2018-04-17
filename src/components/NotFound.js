import React from "react";
import { Link } from "react-router-dom";

const Notfound = ({ location }) => (
  <div className="container">
	  <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="img-404" />
      <p>We couldn't find what you were looking for.</p>
      <p>
          Please contact the owner of the site that linked you to the original URL
          and let them know their link is broken.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
          Home
      </Link>
  </div>
);

export default Notfound;
