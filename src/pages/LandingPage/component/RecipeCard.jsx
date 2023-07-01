import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { BsTrash, BsPencil } from "react-icons/bs";

export const RecipeCard = ({ recipe, dispatch }) => {
  return (
    <div className="recipe-card">
      <div className="action-item">
        <BsPencil
          onClick={() => dispatch({ type: "SET_EDIT", payload: recipe })}
        />
        <BsTrash
          onClick={() => dispatch({ type: "SET_DELETE", payload: recipe.id })}
        />
      </div>
      <div className="recipe-image-container">
        {recipe.recipeImage && (
          <img src={recipe.recipeImage} alt={recipe.cuisineName[0]} />
        )}
        {!recipe.recipeImage && <p>No Image Available!</p>}
      </div>
      <div>
        <h3>{recipe.cuisineName}</h3>
        <div className="detail-list-container">
          <div className="detail-list">
            <p className="heading">Cuisine Type:</p>
            <p>{recipe.cuisineType}</p>
          </div>
          <div className="detail-list">
            <p className="heading">Ingredients:</p>
            <Link to={`/recipe/${recipe.id}`} className="link">
              <p>See Recipe</p>
              <LiaGreaterThanSolid />
            </Link>
          </div>
          <div className="detail-list">
            <p className="heading">Instructions:</p>
            <Link to={`/recipe/${recipe.id}`} className="link">
              <p>See Recipe</p>
              <LiaGreaterThanSolid />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
