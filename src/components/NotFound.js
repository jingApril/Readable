import React from "react";
import { Link } from "react-router-dom";

const Notfound = ({ location }) => (
  <div className="container">
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="alert alert-primary">
          <p>We couldn't find what you were looking for.</p>
          <p>
              Please contact the owner of the site that linked you to the original URL
              and let them know their link is broken.
          </p>
      </div>
      <Link to="/" class="text-uppercase text-primary">
      Home
    </Link>
  </div>
);

export default Notfound;
