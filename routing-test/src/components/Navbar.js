import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/admin">
          Admin
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
