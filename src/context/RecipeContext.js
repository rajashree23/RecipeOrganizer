import { createContext, useContext, useEffect, useReducer } from "react";
import { RecipeReducer, initialState } from "../reducer/RecipeReducer";
import { recipies } from "../db";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, initialState);
  useEffect(() => {
    dispatch({
      type: "SET_INITIAL_RECIPIES",
      payload: localStorage.getItem("recipies") || recipies,
    },);
  },[]);
  
  return (
    <RecipeContext.Provider
      value={{
        recipies: state.recipies,
        filterBy: state.filterBy,
        inputText: state.inputText,
        dispatch: dispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
