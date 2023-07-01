import { AiOutlinePlusCircle } from "react-icons/ai";

import { useRecipeContext } from "../../context/RecipeContext";
import { Filter } from "./component/Filter";
import { RecipeCard } from "./component/RecipeCard";

import "./landing.mobile.layout.css";
import "./landing.desktop.layout.css";
import { useState } from "react";
import { AddNewRecipe } from "./component/AddNewRecipe";
import { getFilteredRecipes } from "../../utils";

export const LandingPage = () => {
  const { recipies, dispatch, filterBy,inputText} = useRecipeContext();
  const [showAddNew, setShowAddNew] = useState(false);

  const filteredRecipes=getFilteredRecipes(inputText,filterBy,recipies);

  return (
    <div className="landing-container">
      <div>
        <h1>Recipe Hut</h1>
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <h2>All Recipes</h2>
        <div className="recipe-container">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} dispatch={dispatch} />
          ))}
          <div
            className="add-new"
            onClick={() => setShowAddNew((prev) => !prev)}
          >
            <AiOutlinePlusCircle className="icon" />
          </div>
        </div>
      </div>
      {showAddNew && <AddNewRecipe setShowAddNew={setShowAddNew} />}
    </div>
  );
};
