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
    const recipes = await fetchRecipes(leftovers);
    setRecipeSuggestions(recipes);
    setLoading(false);
  };

  // Mock function to simulate fetching recipe suggestions (can be replaced with an API)
  const fetchRecipes = (ingredients) => {
    // Normalize the input ingredients (convert to lowercase and split by comma)
    const ingredientList = ingredients.toLowerCase().split(',').map(item => item.trim());

    // Example static recipe suggestions (replace with real API call)
    const mockRecipes = [
        { name: "Veggie Stir Fry", ingredients: "Carrot, Bell Pepper, Broccoli" },
        { name: "Leftover Pasta Salad", ingredients: "Pasta, Tomato, Cucumber, Lettuce" },
        { name: "Fried Rice", ingredients: "Rice, Onion, Garlic, Peas" },
        { name: "Egg Fried Rice", ingredients: "Eggs, Rice, Soy Sauce, Green Onion" },
        { name: "Scrambled Eggs with Rice", ingredients: "Eggs, Rice, Butter" },
        { name: "Egg Curry", ingredients: "Eggs, Tomatoes, Onion, Spices" },
        { name: "Rice Pudding", ingredients: "Rice, Milk, Sugar, Cinnamon" },
        { name: "Egg Salad", ingredients: "Eggs, Mayonnaise, Mustard, Lettuce" },
        { name: "Omelette", ingredients: "Eggs, Cheese, Bell Pepper, Onion" },
        { name: "Vegetable Fried Rice", ingredients: "Rice, Peas, Carrots, Soy Sauce, Onion" },
        { name: "Egg Drop Soup", ingredients: "Eggs, Chicken Broth, Cornstarch, Green Onion" },
        { name: "Egg Tacos", ingredients: "Eggs, Tortillas, Salsa, Avocado" },
        { name: "Spanish Rice", ingredients: "Rice, Tomatoes, Onion, Garlic, Spices" },
        { name: "Egg Biryani", ingredients: "Eggs, Rice, Onion, Spices, Yogurt" },
        { name: "Rice and Beans", ingredients: "Rice, Black Beans, Onion, Garlic, Spices" },
        { name: "Rice and Egg Stir Fry", ingredients: "Rice, Eggs, Soy Sauce, Garlic, Green Onion" },
        { name: "Egg Casserole", ingredients: "Eggs, Cheese, Milk, Bacon, Potato" },
        { name: "Baked Rice Pudding", ingredients: "Rice, Eggs, Milk, Sugar, Vanilla" },
        { name: "Shakshuka", ingredients: "Eggs, Tomatoes, Onion, Garlic, Spices" },
        { name: "Rice Balls", ingredients: "Rice, Seaweed, Soy Sauce, Sesame" },
      
        // Indian Recipes (Veg and Non-Veg)
        { name: "Egg Biryani", ingredients: "Eggs, Rice, Onion, Spices, Yogurt" },
        { name: "Anda Masala (Egg Curry)", ingredients: "Eggs, Tomatoes, Onion, Garlic, Ginger, Spices" },
        { name: "Vegetable Pulao", ingredients: "Rice, Peas, Carrots, Spices" },
        { name: "Egg Paratha", ingredients: "Eggs, Flour, Onion, Spices" },
        { name: "Masala Fried Rice", ingredients: "Rice, Onion, Peas, Tomatoes, Spices" },
        { name: "Egg Korma", ingredients: "Eggs, Onion, Tomato, Cream, Spices" },
        { name: "Hyderabadi Egg Biryani", ingredients: "Eggs, Rice, Yogurt, Onion, Spices" },
        { name: "Egg Tikka Masala", ingredients: "Eggs, Tomatoes, Cream, Spices" },
        { name: "Aloo Gobi with Rice", ingredients: "Potatoes, Cauliflower, Rice, Spices" },
        { name: "Chole Rice (Chickpea Rice)", ingredients: "Rice, Chickpeas, Onion, Tomatoes, Spices" },
        { name: "Egg Pulao", ingredients: "Eggs, Rice, Onion, Spices, Green Chilies" },
        { name: "Pesarattu (Green Gram Pancake)", ingredients: "Green Gram, Rice, Ginger, Spices" },
        { name: "Kadhi Pakora", ingredients: "Yogurt, Chickpea Flour, Spices, Rice" },
        { name: "Dum Egg Biryani", ingredients: "Eggs, Rice, Spices, Onion, Yogurt" },
        { name: "Methi Thepla with Rice", ingredients: "Fenugreek Leaves, Flour, Spices, Rice" },
        { name: "Methi Rice (Fenugreek Rice)", ingredients: "Rice, Fenugreek Leaves, Spices" },
        { name: "Palak Rice (Spinach Rice)", ingredients: "Rice, Spinach, Garlic, Spices" },
        { name: "Aloo Baingan (Potato & Eggplant) with Rice", ingredients: "Potatoes, Eggplant, Rice, Spices" },
        { name: "Tamarind Rice (Puliyodarai)", ingredients: "Rice, Tamarind, Spices, Peanuts" },
        { name: "Chana Pulao", ingredients: "Rice, Chickpeas, Onion, Spices" },
        { name: "Bhindi Masala with Rice", ingredients: "Okra, Rice, Onion, Spices" },
        { name: "Baingan Bharta with Rice", ingredients: "Eggplant, Rice, Tomatoes, Spices" },
      
        // Non-Vegetarian Indian Recipes
        { name: "Chicken Biryani", ingredients: "Chicken, Rice, Onion, Spices, Yogurt" },
        { name: "Butter Chicken", ingredients: "Chicken, Tomatoes, Cream, Spices" },
        { name: "Chicken Curry", ingredients: "Chicken, Tomatoes, Onion, Garlic, Ginger, Spices" },
        { name: "Mutton Rogan Josh", ingredients: "Mutton, Onion, Yogurt, Garlic, Spices" },
        { name: "Chicken Tikka Masala", ingredients: "Chicken, Tomatoes, Cream, Spices" },
        { name: "Kadhai Chicken", ingredients: "Chicken, Bell Peppers, Tomatoes, Spices" },
        { name: "Lamb Keema", ingredients: "Ground Lamb, Tomatoes, Peas, Spices" },
        { name: "Fish Curry", ingredients: "Fish, Tomatoes, Onion, Coconut Milk, Spices" },
        { name: "Prawn Masala", ingredients: "Prawns, Tomatoes, Onion, Garlic, Spices" },
        { name: "Tandoori Chicken", ingredients: "Chicken, Yogurt, Lemon, Spices" },
        { name: "Chicken Shawarma", ingredients: "Chicken, Yogurt, Garlic, Spices" },
        { name: "Mutton Biryani", ingredients: "Mutton, Rice, Onion, Spices, Yogurt" },
        { name: "Fish Amritsari", ingredients: "Fish, Besan, Spices, Lemon" },
        { name: "Methi Chicken", ingredients: "Chicken, Fenugreek Leaves, Spices" },
        { name: "Prawn Biryani", ingredients: "Prawns, Rice, Onion, Spices" },
        { name: "Nihari", ingredients: "Beef, Onion, Spices, Ginger, Garlic" },
        { name: "Korma Mutton", ingredients: "Mutton, Onion, Cream, Spices" },
        { name: "Fish Tikka", ingredients: "Fish, Yogurt, Lemon, Spices" }
      ];
      

    // Filter recipes based on whether their ingredients match the input
    const filteredRecipes = mockRecipes.filter((recipe) => {
      const recipeIngredients = recipe.ingredients.toLowerCase().split(",").map(item => item.trim());
      return ingredientList.every(ingredient => recipeIngredients.includes(ingredient));
    });

    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(filteredRecipes); // Return filtered recipes
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
