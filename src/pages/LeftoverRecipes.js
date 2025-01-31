import React, { useState } from "react";
import "../styles/LeftoverRecipes.css"; // Corrected import path

const LeftoverRecipes = () => {
  const [leftovers, setLeftovers] = useState("");
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change for leftovers
  const handleLeftoversChange = (e) => {
    setLeftovers(e.target.value);
  };

  // Handle search for recipes based on leftovers
  const handleFindRecipes = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecipeSuggestions([]); // Clear previous results

    // Simulate an API call to get recipe suggestions based on the leftovers
    // You can integrate a real recipe API like Spoonacular or Edamam here

    const recipes = await fetchRecipes(leftovers);
    setRecipeSuggestions(recipes);
    setLoading(false);
  };

  // Mock function to simulate fetching recipe suggestions (can be replaced with an API)
  const fetchRecipes = (ingredients) => {
    // Example static recipe suggestions (replace with real API call)
    return new Promise((resolve) =>
      setTimeout(() => {
        const mockRecipes = [
          { name: "Veggie Stir Fry", ingredients: "Carrot, Bell Pepper, Broccoli" },
          { name: "Leftover Pasta Salad", ingredients: "Pasta, Tomato, Cucumber, Lettuce" },
          { name: "Fried Rice", ingredients: "Rice, Onion, Garlic, Peas" },
        ];
        resolve(mockRecipes);
      }, 1500)
    );
  };

  return (
    <div className="leftover-recipes">
      <h1>Leftover Recipes</h1>
      <p>Use your leftover ingredients to create delicious meals!</p>

      {/* Leftovers Input */}
      <div className="input-container">
        <input
          type="text"
          value={leftovers}
          onChange={handleLeftoversChange}
          placeholder="Enter your leftover ingredients (comma separated)"
        />
        <button onClick={handleFindRecipes}>Find Recipes</button>
      </div>

      {/* Loading Indicator */}
      {loading && <p>Loading recipes...</p>}

      {/* Recipe Suggestions */}
      <div className="recipe-suggestions">
        <h3>Suggested Recipes:</h3>
        {recipeSuggestions.length === 0 && !loading && (
          <p>No recipes found. Try adding more ingredients.</p>
        )}
        <ul>
          {recipeSuggestions.map((recipe, index) => (
            <li key={index}>
              <strong>{recipe.name}</strong> - Ingredients: {recipe.ingredients}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftoverRecipes;
