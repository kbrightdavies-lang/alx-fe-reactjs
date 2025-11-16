// RecipeList component
  import { Link } from "react-router-dom";
  import { useRecipeStore } from '.src/components/recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    if (recipes.length === 0) return <p>No recipes found.</p>;


    return (
      <div>
        <h2>Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;