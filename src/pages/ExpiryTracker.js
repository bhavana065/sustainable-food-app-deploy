import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ExpiryTracker.css"; // Add your CSS file for styling

const ExpiryTracker = () => {
  // Sample data for tracking expiry dates
  const [items, setItems] = useState([
    { name: "Milk", expiryDate: "2025-02-10" },
    { name: "Eggs", expiryDate: "2025-02-15" },
    { name: "Bread", expiryDate: "2025-01-30" },
    { name: "Carrots", expiryDate: "2025-02-05" },
  ]);

  return (
    <div className="expiry-tracker-container">
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

      {/* Expiry Tracker Section */}
      <div className="expiry-tracker-section">
        <h1>Expiry Date Tracker</h1>
        <p>Track food expiry dates and get reminders before they spoil!</p>
        
        <ul className="expiry-items">
          {items.map((item, index) => (
            <li key={index} className="expiry-item">
              <span>{item.name} - Expires on: {item.expiryDate}</span>
            </li>
          ))}
        </ul>

        <p>Click below to add new items to your expiry tracker:</p>
        <Link to="/grocery-list" className="cta-button">Add Item</Link>
      </div>
    </div>
  );
};

export default ExpiryTracker;
