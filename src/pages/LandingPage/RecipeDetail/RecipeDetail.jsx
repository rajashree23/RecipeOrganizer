import { useRecipeContext } from "../../../context/RecipeContext";
import { useParams } from "react-router-dom";

import "./recipedetail.mobile.layout.css";

export const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { recipies } = useRecipeContext();
  const findRecipe = recipies.find(
    (recipe) => recipe.id.toString() === recipeId
  );

  return (
    <div>
      {findRecipe && (
        <>
          <h1>{findRecipe.cuisineName}</h1>
          <div>
            <div className="recipe-image-container">
              <img src={findRecipe.recipeImage} alt="recipe" />
            </div>
            <div>
              <p>Cuisine: {findRecipe.cuisineName}</p>
              <p>Ingredients: {findRecipe.ingredients}</p>
              <p>Instructions: {findRecipe.instructions}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
