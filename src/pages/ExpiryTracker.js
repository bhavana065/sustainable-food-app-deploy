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

  const [newItemName, setNewItemName] = useState("");
  const [newItemExpiry, setNewItemExpiry] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItemName && newItemExpiry) {
      setItems([...items, { name: newItemName, expiryDate: newItemExpiry }]);
      setShowModal(false);  // Close the modal after adding
      setNewItemName(""); // Reset input fields
      setNewItemExpiry(""); // Reset input fields
    } else {
      alert("Please fill in both fields");
    }
  };

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
        <button onClick={() => setShowModal(true)} className="cta-button">Add Item</button>

        {/* Modal for Adding Item */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setShowModal(false)}>×</span>
              <h2>Add New Item</h2>
              <label>
                Item Name:
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Enter item name"
                />
              </label>
              <label>
                Expiry Date:
                <input
                  type="date"
                  value={newItemExpiry}
                  onChange={(e) => setNewItemExpiry(e.target.value)}
                />
              </label>
              <button onClick={handleAddItem} className="add-item-btn">Add Item</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpiryTracker;

