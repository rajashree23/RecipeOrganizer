import { useState } from "react";
import { useRecipeContext } from "../../../context/RecipeContext";
import { handleImageUpload } from "../../../utils";

export const EditModal = ({ editModal }) => {
  const { dispatch } = useRecipeContext();

  const [image, setImage] = useState(null);
  const [postData, setPostData] = useState({
    cuisineName: editModal.cuisineName,
    cuisineType: editModal.cuisineType,
    ingredients: editModal.ingredients,
    instructions: editModal.instructions,
  });

  const handleInputChange = (type, value) =>
    setPostData((postDataVal) => ({ ...postDataVal, [type]: value }));

  const handleSave = async (e) => {
    e.stopPropagation();
    if (image) {
      const imageUploadResponse = await handleImageUpload(image);
      dispatch({
        type: "SET_RECIPIES",
        payload: { ...postData, recipeImage: imageUploadResponse.url },
      });
    } else {
      dispatch({ type: "SET_RECIPIES", payload: postData });
    }
    dispatch({ type: "SET_EDIT", payload: null });
  };

  return (
    <>
      <div className="modal-container">
        <label htmlFor="recipeName">Cuisine Name:</label>
        <input
          type="text"
          placeholder="Enter recipe name"
          id="recipeName"
          value={postData.cuisineName}
          onChange={(e) => handleInputChange("cuisineName", e.target.value)}
        />
        <label htmlFor="cuisineType">Cuisine Type:</label>
        <input
          type="text"
          value={postData.cuisineType}
          placeholder="Enter cuisine type"
          id="cuisinetype"
          onChange={(e) => handleInputChange("cuisineType", e.target.value)}
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          value={postData.ingredients}
          placeholder="Enter ingredients name"
          id="ingredients"
          onChange={(e) => handleInputChange("ingredients", e.target.value)}
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          type="text"
          value={postData.instructions}
          placeholder="Enter instructions"
          id="instructions"
          onChange={(e) => handleInputChange("instructions", e.target.value)}
        />
        <label htmlFor="fileInput">Enter Image for your recipe</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image && (
          <div className="new-image">
            <img src={URL.createObjectURL(image)} alt="post" />
          </div>
        )}
        <div>
          <button
            onClick={() => dispatch({ type: "SET_EDIT", payload: null })}
            className="secondary-button"
          >
            Discard
          </button>
          <button className="primary-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className="myoverlay"></div>
    </>
  );
};
