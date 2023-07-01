import { v4 as uuid } from "uuid";

export const initialState = {
  recipies: [],
  filterBy: "",
  inputText: "",
  editModal: {
    show: false,
    recipe: null,
  },
};

export const RecipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_RECIPIES":
      let finalRecipes = [];
      try {
        finalRecipes = JSON.parse(action.payload);
      } catch (e) {
        finalRecipes = action.payload;
      }
      localStorage.setItem("recipies", JSON.stringify(finalRecipes));
      return {
        ...state,
        recipies: finalRecipes,
      };
    case "SET_RADIO":
      return {
        ...state,
        filterBy: action.payload,
      };
    case "SET_INPUT_TEXT":
      return {
        ...state,
        inputText: action.payload,
      };
    case "SET_RECIPIES": {
      let finalRecipe = [...state.recipies, { id: uuid(), ...action.payload }];
      localStorage.setItem("recipies", JSON.stringify(finalRecipe));
      return {
        ...state,
        recipies: finalRecipe,
      };
    }
    case "SET_EDIT":
      return {
        ...state,
        editModal: {
          show: !state.editModal.show,
          recipe: action.payload,
        },
      };
    case "SET_DELETE": {
      let finalRecipe = state.recipies.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("recipies", JSON.stringify(finalRecipe));
      return {
        ...state,
        recipies: finalRecipe,
      };
    }
    default:
      return state;
  }
};
