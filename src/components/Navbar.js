import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/meal-planner">Meal Planner</Link>
      <Link to="/grocery-list">Grocery List</Link>
      <Link to="/expiry-tracker">Expiry Tracker</Link>
      <Link to="/leftover-recipes">Leftover Recipes</Link>
    </nav>
  );
};

export default Navbar;
