import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthenticationPage from './AuthenticationPage'
import RecipeList from './RecipeList';
import recipes from './recipes';
import RecipeDetails from './RecipeDetails';
import Profile from './Profile';


const App = () => {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const savedRecipesData = localStorage.getItem('savedRecipes');
    return savedRecipesData ? JSON.parse(savedRecipesData) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const handleSaveRecipe = (recipe) => {
    setSavedRecipes((prevSavedRecipes) => [...prevSavedRecipes, recipe]);
  };

  // Function to handle removing recipes from the user's profile
  const handleRemoveRecipe = (recipeId) => {
    setSavedRecipes((prevSavedRecipes) => prevSavedRecipes.filter((recipe) => recipe.id !== recipeId));
  };

  
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/' element={<AuthenticationPage />} />
            <Route path='/home' element={<RecipeList recipes={recipes} onSaveRecipe={handleSaveRecipe} />} />
            <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
            <Route
              path="/profile"
              element={<Profile savedRecipes={savedRecipes} onRemoveRecipe={handleRemoveRecipe} />}
            />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
