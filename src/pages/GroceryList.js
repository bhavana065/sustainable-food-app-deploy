import React from "react";
import { Link } from "react-router-dom";
import "../styles/GroceryList.css"; // Add your CSS file for styling

const GroceryList = () => {
  return (
    <div className="grocery-list-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Sustainable Food App</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/meal-planner">Meal Planner</Link></li>
          <li><Link to="/grocery-list">Grocery List</Link></li>
          <li><Link to="/expiry-tracker">Expiry Tracker</Link></li>
          <li><Link to="/leftover-recipes">Leftover Recipes</Link></li>
        </ul>
      </nav>

      {/* Grocery List Section */}
      <div className="grocery-list-section">
        <h1>Grocery List</h1>
        <p>Manage and track your grocery shopping to minimize waste!</p>
        <ul className="grocery-items">
          <li>🍞 Bread</li>
          <li>🥛 Milk</li>
          <li>🥕 Carrots</li>
          <li>🍅 Tomatoes</li>
          <li>🥬 Lettuce</li>
          <li>🍗 Chicken</li>
        </ul>
        <p>Click the button below to add more items to your list:</p>
        <Link to="/meal-planner" className="cta-button">Add More</Link>
      </div>
    </div>
  );
};

export default GroceryList;
