import React, { useState } from "react";
import "../styles/MealPlanner.css"; // Corrected import path

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState({
    monday: { meal: "", category: "Breakfast" },
    tuesday: { meal: "", category: "Breakfast" },
    wednesday: { meal: "", category: "Breakfast" },
    thursday: { meal: "", category: "Breakfast" },
    friday: { meal: "", category: "Breakfast" },
    saturday: { meal: "", category: "Breakfast" },
    sunday: { meal: "", category: "Breakfast" },
  });
  const [newMeal, setNewMeal] = useState("");
  const [newCategory, setNewCategory] = useState("Breakfast");

  const handleMealChange = (e, day) => {
    const { name, value } = e.target;
    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [day]: { ...prevPlan[day], [name]: value },
    }));
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!newMeal) return;
    const day = Object.keys(mealPlan)[0]; // You can change this logic to add meals dynamically
    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [day]: { meal: newMeal, category: newCategory },
    }));
    setNewMeal("");
  };

  return (
    <div className="meal-planner">
      <h1>Meal Planner</h1>
      <p>Plan your meals for the week efficiently!</p>

      {/* Meal Plan for Each Day */}
      <form>
        {Object.keys(mealPlan).map((day) => (
          <div key={day} className="meal-day">
            <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
            <input
              type="text"
              name="meal"
              value={mealPlan[day].meal}
              onChange={(e) => handleMealChange(e, day)}
              placeholder={`Enter meal for ${day}`}
            />
            <select
              name="category"
              value={mealPlan[day].category}
              onChange={(e) => handleMealChange(e, day)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
        ))}
      </form>

      {/* Add New Meal */}
      <div className="meal-addition">
        <h3>Add a New Meal</h3>
        <input
          type="text"
          placeholder="Enter meal"
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
        <button onClick={handleAddMeal}>Add Meal</button>
      </div>

      {/* Display Weekly Summary */}
      <div className="meal-summary">
        <h3>Your Weekly Meal Plan</h3>
        <ul>
          {Object.keys(mealPlan).map((day) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>
              {mealPlan[day].meal || "Not planned"}
              <br />
              <i>Category: {mealPlan[day].category}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealPlanner;
