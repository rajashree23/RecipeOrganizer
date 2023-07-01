import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { RecipeDetail } from "./pages/LandingPage/RecipeDetail/RecipeDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path={`/recipe/:recipeId`} element={<RecipeDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
