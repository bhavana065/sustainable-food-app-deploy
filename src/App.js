import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import to include Routes
import Home from "./pages/Home";
import MealPlanner from "./pages/MealPlanner";
import GroceryList from "./pages/GroceryList";
import ExpiryTracker from "./pages/ExpiryTracker";
import LeftoverRecipes from "./pages/LeftoverRecipes";  // Import LeftoverRecipes component

const App = () => {
  return (
    <Router>
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/expiry-tracker" element={<ExpiryTracker />} />
        <Route path="/leftover-recipes" element={<LeftoverRecipes />} /> {/* Updated route for LeftoverRecipes */}
      </Routes>
    </Router>
  );
};

export default App;
