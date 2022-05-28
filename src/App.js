import React ,{ useState , useEffect } from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";

const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
const [isLoading,setIsLoading] = useState(false);
const [query,setQuery] = useState("");
const [recipes,setRecipes] = useState([]);

const searchRecipes = async () => {
  setIsLoading(true);
  const url = apiUrl + query;
  const res = await fetch(url);
  const data = await res.json();
  setRecipes(data.meals);
  setIsLoading(false);
};

useEffect(() => {
  searchRecipes();

}, []);

const handleSubmit = e => {
  e.preventDefault();
  searchRecipes()
};


  return (
    <div className="container">
        <h2>𝐹😍🍩𝒹 𝑅𝑒𝒸𝒾𝓅𝑒 𝒜𝓅𝓅 </h2>
        <SearchBar 
            handleSubmit={handleSubmit}
            value={query}
            onChange={e => setQuery(e.target.value)}
            isLoading={isLoading}
        />
        <div className="recipes">
          {recipes
           ? recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))
          : "No Recipes"}
        </div>
    </div>
  );
}

export default App;