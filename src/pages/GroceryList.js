import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/GroceryList.css"; // Add your CSS file for styling

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([
    "🍞 Bread",
    "🥛 Milk",
    "🥕 Carrots",
    "🍅 Tomatoes",
    "🥬 Lettuce",
    "🍗 Chicken"
  ]);
  
  const [newItem, setNewItem] = useState("");

  // Function to add a new item to the grocery list
  const handleAddItem = () => {
    if (newItem) {
      setGroceryList([...groceryList, newItem]);
      setNewItem(""); // Clear the input field
    }
  };

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
          {groceryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        {/* Input and button to add more items directly */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a grocery item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default GroceryList;
