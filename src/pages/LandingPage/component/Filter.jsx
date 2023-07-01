import { useRecipeContext } from "../../../context/RecipeContext";
import { filterByRadio } from "../../../db";

export const Filter = () => {
  const { inputText, filterBy, dispatch } = useRecipeContext();

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Search for the items you want"
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_TEXT", payload: e.target.value })
        }
      />
      <div>
        <p>Filters</p>
        {filterByRadio.map((filterOption, index) => (
          <div key={index}>
            <input
              id="name"
              type="radio"
              value={filterOption.key}
              checked={filterOption.key === filterBy}
              onChange={() =>
                dispatch({
                  type: "SET_RADIO",
                  payload: filterOption.key,
                })
              }
            />
            <label htmlFor="name">{filterOption.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
