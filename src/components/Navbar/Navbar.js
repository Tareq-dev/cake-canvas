import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/home">
            <img
              class="radius"
              src="https://i.ibb.co/PQM6BDf/cake-logo-vector-25934828.png"
              alt=""
              width="80"
              height="80"
            />
          </a>
          <h3 className="nav-text">Cake Canvas</h3>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
