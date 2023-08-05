import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import './propertyList.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { signOut } from 'firebase/auth';
import { database } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes, onSaveRecipe }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem("id") || localStorage.getItem("id") !== sessionStorage.getItem("id")){
      history("/")
    }
  }, [])

  // Function to handle the search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  }

  const handleProfileClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  // Filter recipes based on the search query
  const filtered = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle the options button click
  const handleOptionsClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle the save button click
  const handleSaveClick = () => {
    if (selectedRecipe) {
      onSaveRecipe(selectedRecipe);
      setSelectedRecipe(null);
    }
  };

  const handleOptionsClose = () => {
    setSelectedRecipe(null);
  };

  const handleSignOutClick = () => {
    // Handle the signout logic here
    signOut(database).then(val => {
      sessionStorage.clear()
      localStorage.clear()
      history("/");
    })
    console.log('Sign Out');
  };

  return (
    <div className="property-list">
      <h2>Recipe Catalog</h2>
      <div className="profile-container">
        {/* Display the profile picture */}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAAB3CAMAAACuVIUTAAABIFBMVEUAAAABt/8At/8AAAMAuf8Au/8Avv8AAAYAAA8AAAkAwf8AABEAAA0AACMAABQAABYBABwEXKwAACAHrPoAACwAADEDACkECkoFHmAELHQGNYYGR5YFWaYENn8FLGsFHlkDAEAAADcFFGgJTp8Hbr4Hi9sInOsISpIEAEQDBlkIQ5oNhdgHpe4Ogc8HJW8HbcMKYqwCDVUGqOsHarEKc7QOhsUHSHoIKk0KT3sNmtUAJD8DQGIEEBsFYqQIP3oEMmAMUncIJ1oCFUUMTIwCEkkRddMLZpIJG2cGIEgIWo4TZ54DdqgKi8ILIjIIME4PjtYOL0QFYr4PN10MmPIBdukCHIUGNJ8Ihf8BLqwLXuUOXtUDQ6oDKowCTNIGNpMDEyuf69u+AAAHgUlEQVR4nO1bC1faSBSeSeaRgUAQFLv13Wq0Gtw2FS2iFpXW+qi43W13+9j1//+LvZOAJBOC7alnGdh89FCk4znz5bv3u/dOUoQyZMiQIUOGDBkyZMiQIUOGDBkmFuaoN/BQMOWri+6HUW/p59DlwjkXwhYSIbVR7+tnANsXwCeft5xSqVQs2hYw4yY3xzQQA4FsyylPzz765fHc/NTU1PzcwuLScqFU5MCUj3qDP4og5ISVL608ebq65lYwZRIUV9za6vpGwbFArjGTKtCoOP1sc8vDhFJKDIMYGJPgM/ZqC8tli4uxYgWuYJdWtn91GSWSSwwGIYy6z5fK+fEhJY1N5MvPVj2piWHg4NV/C/6i1JtfcSAAx8MsZCI5L6YqAaM0TgTEctdX8mOSVpznC2drlOLhMAyKaxtFm2vPSdpdcfqpR42kNspngkGqhbytffwBJWd2FaxBdYZBSkFa4fVpm+suFRfLNQISkK4e4d4x/Ci/lN+SqGYEz5dAKY2TSqr0YitHIjEmBTOo9ATCsI+pDLloHJLcy5miyXUNP5lLYnZLqUiEshy0EDl3p76796qRYzQeloQ8L+jrftA7ODM1JiXpezYlfn13f/+6uY9sWHOw32wQSiJ+AUsO9a2+JrdmphiJSGDQSr0ZWyHfm3VMZXbdLWNHtq6kuHAWKsSIaMD81+huigqNQL7lWw1m9LXE1Du29LQJzouPKjSa/9Q9ga+VzYabr0V9xGCdqq3j7AEGUajJy98PPO8IhcIklqJFj/SDFFzxyBL//ZbvgRzQS+s4Wnuoe4oGUgLYC16sTFHvRL+MMpEQbTfa41H/zVHqYnTs0piZkMOSrRsp4GTNEdLv6wh5W0BDjh06pF96wQKp9063IgWJn6+uRaopIS9ReBA2cDlCdaVvZ4f6deiieIaNvk7EPUbph3kmeudHvDwYEv2CpRkpLqZrNLJHsuOEh5WDFsO351jhhOm5pVnwcXPJpfgu9khlN8XxgtHeRC0S8fLQUzoFzTpZwedwf1Q36FohLZXM4MByz496eWjnrxP1eaQw7TzU24hDeIW0lSGnvKd4BBjlKdIpoUwuqhWKI3O5v58SeyEnE12wuE7QHO5woVGDxLn1gkVGPeD0IWXpXTNLSDz2oJUq6lR2TZ5fz0XnPIO00nUKSanBB8PjjNAo+EyRX2Uxb6aXKT3EHadoCx82fblFjWIPWvJSjUUvOab1tPYVhTn1jipejnHu1NSmkZXnENMdGtfpyk53McmpmTMSOp3rxWnWi/cFofGlbDD4Bz8Re6CtTpx424uHksHO0ytokFAtEjmS6HYS+hRdyUnVSfakqZNGKOAVVXXqIKFLdyRjb8NVU57tpLpE6HzvfZrQSafYEytu3CNkRl2nhVJ4Mx61WFInXTjJ+lReo+qpP6sPu7seCBXXCZQV2lCC6alYY4pOVNrEkBKF0NvorA8vuAha9RF8lSn9G7ia3xzyOzcNRgylPmnFiYv5nBJ6Rhh9g8IvsIimOhTi3C7SpzeCvtw+U3WSZ0fG4MIbfHfjk/h6g53o9CCIaVoFd8AN3NyrgRkVcLpUbyUSH2k1a5hWfi3R6xiEXQ7hxJT1rKOT7cngQ8/VPUrva6RyOrhSrgFhWllEYM27ODE8YOqneQRqKZ5iENxMt/6RAAYiT+3fYIT3Ujndqp5CGwWNHAIFtzVEPXK+1816PJ/+K4qsBr3QTSYZfP1bhF2daOU2IVNv3y2l7zBwVa90CtpY5FKVU+dgYMfnXLeuiDKbyGbvP9/2PYA++5QpLsHqyW3etC6vGj6NjRlE/vmgUxMRAoSqdiiJ16fDxLL3PiM09ixB8GbQS1ubGbcPEOp1JSYU9Y4Tq27woCeRIBD30o8vRgbYkEAvIwfGhNCt5LIm7T1vFJjdXas35PRihJB2XnZpd6/y/OS3ZdUhZKmFShQuiSbelZaUgoyCZsIIjBlEIqvVxIGEia4bVGqDuyp1y62/py0nMK7wdgXkvLs56IjFRk7jbsjvcZKepyUjCSAlOmDoBqG/Pw6fYDHVBei2k3gw7EK/0tQHtOf7DQou9uZM/pC4+KYtEG93aPi0S7cnpIMHEn3AUbWGyR8fB1ICUo6D2p+iZ7Zk6N0CPcCtjTd//tUWQGlQX2CWqsg5DQ6MgsJLWN3RrM9LAIa9zc8fVyz5/NHgFcWTwk63MQR39HeR7pRgg5ufnk3nReqzyCYqnOLu0QVhV3tyXted0+OzgpWqUYBrP3z4nFB8IeNOv55IQXUJoaENtimdUT7EQ5jfQlxjE++Bl+9dUlo4JpBIDO/cIK0fLO9B3H/dT75s7+Swf1lFGnbig/Adm7S/flmot/aTD8qOM5Y+f5Uaae/gP4Lyt78XTe17hx+DXfz0z4H8MEGkhHPyLTnUjzlsvn1WGvUmHhKQRpYltttjUGy/H8CphE6eVEe9jwcGtK3ts1Fv4oEBpen20dLtqLfxsICkKrQni1MwXojSBNWnXutatEa9kQeEGf4vY3Oy7DwUapJir8dpojrznk7a3UT7GXTnjEnSadLYZMiQIUOGDP9X/AsAaXz5vt/EawAAAABJRU5ErkJggg=="
              alt="Profile"
              className="profile-picture"
              onClick={handleProfileClick}
            />
            {showOptions && (
              <div className="options-overlay-2">
                <button onClick={handleSignOutClick}>Sign Out</button>
                <Link to="/profile">Profile</Link>
              </div>
            )}
      </div>
      <div className="property-search">
        <input
          type="text"
          placeholder="Search by name, ingredient, cuisine, etc."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="property-grid">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div
              className="save-button"
              onClick={() => handleOptionsClick(recipe)}
            >
              <i className="fas fa-ellipsis-v"></i>
            </div>
            {selectedRecipe && selectedRecipe.id === recipe.id && (
              <div className="options-overlay">
                <span className='close-btn' onClick={handleOptionsClose}>✕</span>
                <button onClick={handleSaveClick}>Save Recipe</button>
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
    </div>
  );
};

export default RecipeList;