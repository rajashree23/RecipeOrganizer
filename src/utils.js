const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload`;

export const handleImageUpload = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUDNAME);
  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

export const getFilteredRecipes = (inputType, filterBy, recipies) => {
  if (inputType) {
    if (filterBy === "name") {
      return recipies.filter((recipe) =>
        recipe.cuisineName.toLowerCase().includes(inputType.toLowerCase())
      );
    } else if (filterBy === "ingredients") {
      return recipies.filter((recipe) =>
        recipe.ingredients.toLowerCase().includes(inputType.toLowerCase())
      );
    } else if (filterBy === "cuisine") {
      return recipies.filter((recipe) =>
        recipe.cuisineType.toLowerCase().includes(inputType.toLowerCase())
      );
    }
  }
  return recipies;
};
