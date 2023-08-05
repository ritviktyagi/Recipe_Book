import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './propertyList.css'

const Profile = ({ savedRecipes, onRemoveRecipe }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const history = useNavigate();

    useEffect(() => {
      if(!sessionStorage.getItem("id") || localStorage.getItem("id") !== sessionStorage.getItem("id")){
        history("/")
      }
    }, [])

    const handleOptionsClick = (recipe) => {
        setSelectedRecipe(recipe);
      };
    
      // Function to handle the save button click
      const handleRemoveClick = (recipeId) => {
        onRemoveRecipe(recipeId);
      };

  return (
    <div className="property-list">
        <h2>User Profile</h2>
      <h3>Saved Recipes</h3>
      {savedRecipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
      <div className="property-grid">
      {savedRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div
              className="save-button"
              onClick={() => handleOptionsClick(recipe)}
            >
              <i className="fas fa-ellipsis-v"></i>
            </div>
            {selectedRecipe && selectedRecipe.id === recipe.id && (
              <div className="options-overlay">
                <button onClick={() => handleRemoveClick(recipe.id)}>Remove Recipe</button>
              </div>
            )}
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.name}</h3>
            </Link>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
          </div>
        ))}       
      </div>
      )}
    </div>
  );
};

export default Profile;