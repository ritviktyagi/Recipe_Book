// src/components/RecipeDetails.js
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './propertyList.css'

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const history = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem("id") || localStorage.getItem("id") !== sessionStorage.getItem("id")){
      history("/")
    }
  }, [])

  // Find the corresponding recipe using the recipeId
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  console.log('RecipeDetails - recipe:', recipe); // Add this console log

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  var str = recipe.instructions.split('\n');
  console.log(str, "arr");

  return (
    <div className="property-list">
      <h1>{recipe.name}</h1>
      <img src={require(`../src/assets/${recipe.image}`)} alt={recipe.name} className='recipe-img' />
      <h3>Cuisine: {recipe.cuisine}</h3>
      <h3>Ingredients: {recipe.ingredients.join(', ')}</h3>
      <h3>Instructions:-</h3>
      {
        str.map((item, idx) => {
          console.log(item, "item")
          return ( 
            <div key={idx}>
                <h4>{item}</h4>
            </div>
          )
        })
      }
    </div>
  );
};

export default RecipeDetails;
