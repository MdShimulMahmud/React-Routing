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
        <NavLink className="nav-link" to="/api">
          Api
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
