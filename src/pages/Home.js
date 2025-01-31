import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Home.css"; // Import the new styling

const Home = () => {
  return (
    <div className="home-container">
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

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to the Sustainable Food App</h1>
        <p>Reduce food waste and make smarter food choices!</p>
        <button className="cta-button" onClick={() => alert('Coming Soon!')}>
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-box">
          <Link to="/meal-planner">
            <h3>🍽️ Meal Planning</h3>
            <p>Plan your meals efficiently and reduce food waste.</p>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/grocery-list">
            <h3>🛒 Smart Grocery List</h3>
            <p>Generate a smart grocery list based on your meal plan.</p>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/expiry-tracker">
            <h3>⏳ Expiry Date Tracker</h3>
            <p>Track food expiry dates and get reminders to use items before they spoil.</p>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/leftover-recipes">
            <h3>🍴 Leftover Recipes</h3>
            <p>Turn your leftover ingredients into delicious meals.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
